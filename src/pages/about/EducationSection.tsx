import { Text } from '../../components/ui/Text';
import { Fragment } from 'react';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/text/SectionHeader';
import { TextLink } from '../../components/ui/TextLink';
import { EducationGridContainer, GridColumnMain, GridColumnDate } from '../../components/ui/Grid';
import { education } from '../../lib/data';

export function EducationSection() {
  return (
    <Section>
      <SectionHeader>Education</SectionHeader>
      <EducationGridContainer>
        {education.map((item, index) => (
          <Fragment key={index}>
            <GridColumnMain>
              <TextLink
                newTab
                href={item.institutionUrl}
                className="hover:text-foreground underline"
              >
                {item.institution}
              </TextLink>
              <Text.B4 className="text-fg-secondary">{item.degree}</Text.B4>
            </GridColumnMain>
            <GridColumnDate>
              <Text.B4 className="text-fg-secondary">{item.year}</Text.B4>
            </GridColumnDate>
          </Fragment>
        ))}
      </EducationGridContainer>
    </Section>
  );
}
