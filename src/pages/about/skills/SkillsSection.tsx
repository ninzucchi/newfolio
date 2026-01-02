import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SectionCollapsible } from '@/components/ui/section/Section';
import { skills } from '@/lib/data';

export function SkillsSection() {
  const maxRows = Math.max(
    skills.Design.length,
    skills.Development.length,
    skills.Product.length
  );

  return (
    <SectionCollapsible title="Skills">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Design</TableHead>
            <TableHead>Development</TableHead>
            <TableHead>Product</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: maxRows }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>{skills.Design[index] || ''}</TableCell>
              <TableCell>{skills.Development[index] || ''}</TableCell>
              <TableCell>{skills.Product[index] || ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionCollapsible>
  );
}

