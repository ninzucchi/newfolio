import { SectionCollapsible } from '@/components/ui/section/Section';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Text } from '@/components/ui/text/Text';
import { skills } from '@/lib/data';

export function SkillsSection() {
  const maxRows = Math.max(skills.Design.length, skills.Engineering.length, skills.Product.length);

  return (
    <SectionCollapsible title="Skills">
      <TableContainer>
        <Table className="[table-layout:fixed]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">
                <Text.B4>Design</Text.B4>
              </TableHead>
              <TableHead className="w-1/3">
                <Text.B4>Engineering</Text.B4>
              </TableHead>
              <TableHead className="w-1/3">
                <Text.B4>Product</Text.B4>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: maxRows }).map((_, index) => (
              <TableRow key={index} className="text-fg-secondary">
                <TableCell className="w-1/3">
                  <Text.B4>{skills.Design[index] || ''}</Text.B4>
                </TableCell>
                <TableCell className="w-1/3">
                  <Text.B4>{skills.Engineering[index] || ''}</Text.B4>
                </TableCell>
                <TableCell className="w-1/3">
                  <Text.B4>{skills.Product[index] || ''}</Text.B4>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionCollapsible>
  );
}
