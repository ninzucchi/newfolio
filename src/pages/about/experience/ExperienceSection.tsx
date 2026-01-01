import { GridCell, GridCellFit, GridCellRight } from '@/components/ui/grid/GridCell';
import { IconContainer } from '@/components/ui/IconContainer';
import { SectionCollapsible } from '@/components/ui/section/Section';
import { Text } from '@/components/ui/text/Text';
import { TextLink } from '@/components/ui/text/TextLink';
import { experience } from '@/lib/data';
import { ExperienceGrid } from '@/pages/about/experience/ExperienceGrid';
import { Fragment } from 'react';

export function ExperienceSection() {
  return (
    <SectionCollapsible title="Experience">
      <ExperienceGrid>
        {experience.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Fragment key={index}>
              <GridCellFit>
                <IconContainer>
                  <IconComponent className="text-fg-primary" size={20} />
                </IconContainer>
              </GridCellFit>
              <GridCell>
                <TextLink newTab href={item.companyUrl} className="hover:text-foreground underline">
                  {item.company}
                </TextLink>
                <Text.B4 className="text-fg-secondary">{item.role}</Text.B4>
              </GridCell>
              <GridCellRight>
                <Text.B4 className="text-fg-secondary">{item.period}</Text.B4>
              </GridCellRight>
            </Fragment>
          );
        })}
      </ExperienceGrid>
    </SectionCollapsible>
  );
}
