import { GridCell, GridCellRight } from '@/components/ui/grid/GridCell';
import { SectionCollapsible } from '@/components/ui/section/Section';
import { Text } from '@/components/ui/text/Text';
import { TextLink } from '@/components/ui/text/TextLink';
import { education } from '@/lib/data';
import { EducationGrid } from '@/pages/about/education/EducationGrid';
import { Fragment } from 'react';

export function EducationSection() {
  return (
    <SectionCollapsible title="Education">
      <EducationGrid>
        {education.map((item, index) => (
          <Fragment key={index}>
            <GridCell>
              <TextLink
                newTab
                href={item.institutionUrl}
                className="hover:text-foreground underline"
              >
                {item.institution}
              </TextLink>
              <Text.B4 className="text-fg-secondary">{item.degree}</Text.B4>
            </GridCell>
            <GridCellRight>
              <Text.B4 className="text-fg-secondary">{item.year}</Text.B4>
            </GridCellRight>
          </Fragment>
        ))}
      </EducationGrid>
    </SectionCollapsible>
  );
}
