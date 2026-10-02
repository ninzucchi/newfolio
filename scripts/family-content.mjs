import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve, relative, isAbsolute, sep } from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const magic = Buffer.from('FAMILY01');
const encryptedFile = resolve(root, 'private/family-archive.enc');
const outputDir = resolve(root, 'public/family');

function contentKey() {
  const value = process.env.FAMILY_ARCHIVE_CONTENT_KEY;
  if (!/^[a-f\d]{64}$/i.test(value || '')) {
    throw new Error('FAMILY_ARCHIVE_CONTENT_KEY must be a 32-byte hexadecimal key.');
  }
  return Buffer.from(value, 'hex');
}

export function encryptContent(files, key) {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(magic);
  const payload = gzipSync(JSON.stringify({ version: 1, files }));
  const ciphertext = Buffer.concat([cipher.update(payload), cipher.final()]);
  return Buffer.concat([magic, iv, cipher.getAuthTag(), ciphertext]);
}

export function decryptContent(payload, key) {
  if (!payload.subarray(0, 8).equals(magic)) throw new Error('Invalid archive format.');
  const decipher = createDecipheriv('aes-256-gcm', key, payload.subarray(8, 20));
  decipher.setAAD(magic);
  decipher.setAuthTag(payload.subarray(20, 36));
  const plaintext = Buffer.concat([decipher.update(payload.subarray(36)), decipher.final()]);
  const data = JSON.parse(gunzipSync(plaintext));
  if (data.version !== 1 || !Array.isArray(data.files)) throw new Error('Invalid archive payload.');
  return data.files;
}

async function collect(directory, source = directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collect(path, source));
    else if (entry.isFile()) files.push([relative(source, path).split(sep).join('/'), (await readFile(path)).toString('base64')]);
    else throw new Error(`Archive cannot contain symlinks: ${entry.name}`);
  }
  return files.sort(([a], [b]) => a.localeCompare(b));
}

export function safeOutputPath(name, directory = outputDir) {
  if (typeof name !== 'string' || !name || name.includes('\\') || name.split('/').some(p => !p || p.startsWith('.'))) {
    throw new Error('Invalid archive file path.');
  }
  const destination = resolve(directory, name);
  const suffix = relative(directory, destination);
  if (suffix.startsWith('..') || isAbsolute(suffix)) throw new Error('Archive path escapes output.');
  return destination;
}

async function main() {
  const key = contentKey();
  if (process.argv[2] === 'pack') {
    if (!process.argv[3]) throw new Error('Usage: npm run family:pack -- /path/to/archive/public');
    const files = await collect(resolve(process.argv[3]));
    if (!files.some(([name]) => name === 'index.html')) throw new Error('Archive index.html is missing.');
    await mkdir(dirname(encryptedFile), { recursive: true });
    await writeFile(encryptedFile, encryptContent(files, key));
    console.log(`Encrypted ${files.length} archive files.`);
  } else if (process.argv[2] === 'unpack') {
    const files = decryptContent(await readFile(encryptedFile), key);
    // Validate all destinations before replacing the generated directory.
    for (const [name] of files) safeOutputPath(name);
    await rm(outputDir, { recursive: true, force: true });
    for (const [name, encoded] of files) {
      const destination = safeOutputPath(name);
      let content = Buffer.from(encoded, 'base64');
      if (name === 'index.html') {
        content = Buffer.from(content.toString().replace('<head>', '<head>\n  <base href="/family/">'));
      }
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, content);
    }
    console.log(`Prepared ${files.length} protected archive files.`);
  } else throw new Error('Expected pack or unpack.');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
