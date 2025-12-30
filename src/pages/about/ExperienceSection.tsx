import React from 'react';
import { Text } from '../../components/ui/Text';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/text/SectionHeader';
import { TextLink } from '../../components/ui/TextLink';
import {
  ExperienceGridContainer,
  GridColumnIcon,
  GridColumnMain,
  GridColumnDate,
} from '../../components/ui/Grid';
import { IconContainer } from '../../components/ui/IconContainer';
import { experience } from '../../lib/data';

export function ExperienceSection() {
  return (
    <Section>
      <SectionHeader>Experience</SectionHeader>
      <ExperienceGridContainer>
        {experience.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <React.Fragment key={index}>
              <GridColumnIcon>
                <IconContainer>
                  <IconComponent className="text-fg-primary" size={20} />
                </IconContainer>
              </GridColumnIcon>
              <GridColumnMain>
                <TextLink newTab href={item.companyUrl} className="hover:text-foreground underline">
                  {item.company}
                </TextLink>
                <Text.B4 className="text-fg-secondary">{item.role}</Text.B4>
              </GridColumnMain>
              <GridColumnDate>
                <Text.B4 className="text-fg-secondary">{item.period}</Text.B4>
              </GridColumnDate>
            </React.Fragment>
          );
        })}
      </ExperienceGridContainer>
    </Section>
  );
}
