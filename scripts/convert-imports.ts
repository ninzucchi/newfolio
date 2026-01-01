import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve, dirname, normalize } from 'path';

const SRC_DIR = resolve(process.cwd(), 'src');
const ALIAS_PREFIX = '@/';

function getAllTsFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      getAllTsFiles(filePath, fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function convertRelativeToAlias(filePath: string, importPath: string): string {
  // Skip if already using alias or is not a relative import
  if (importPath.startsWith(ALIAS_PREFIX) || !importPath.startsWith('.')) {
    return importPath;
  }

  // Resolve the import path relative to the current file
  const fileDir = dirname(filePath);
  const resolvedPath = normalize(resolve(fileDir, importPath));

  // Check if it's within src directory
  if (!resolvedPath.startsWith(SRC_DIR)) {
    return importPath; // Keep as-is if outside src
  }

  // Convert to alias path
  let aliasPath = relative(SRC_DIR, resolvedPath);
  
  // Remove file extension
  aliasPath = aliasPath.replace(/\.(ts|tsx)$/, '');
  
  // Remove /index if present
  aliasPath = aliasPath.replace(/\/index$/, '');
  
  // Normalize path separators
  aliasPath = aliasPath.replace(/\\/g, '/');
  
  return `${ALIAS_PREFIX}${aliasPath}`;
}

function convertImportsInFile(filePath: string): boolean {
  const content = readFileSync(filePath, 'utf-8');
  let modified = false;
  let newContent = content;

  // Match any import/export statement with relative paths
  const importRegex = /from\s+['"](\.\.?\/[^'"]+)['"]/g;

  newContent = content.replace(importRegex, (match, importPath) => {
    const converted = convertRelativeToAlias(filePath, importPath);
    if (converted !== importPath) {
      modified = true;
      return match.replace(importPath, converted);
    }
    return match;
  });

  if (modified) {
    writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✓ Converted imports in ${relative(process.cwd(), filePath)}`);
  }

  return modified;
}

function main() {
  console.log('Converting relative imports to @/ aliases...\n');
  const files = getAllTsFiles(SRC_DIR);
  let convertedCount = 0;

  files.forEach((file) => {
    if (convertImportsInFile(file)) {
      convertedCount++;
    }
  });

  console.log(`\n✓ Done! Converted imports in ${convertedCount} file(s).`);
}

main();
