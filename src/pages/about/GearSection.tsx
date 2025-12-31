import { Text } from '../../components/ui/Text';
import { Fragment } from 'react';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TextLink } from '../../components/ui/TextLink';
import { GearGridContainer, GridColumnMain, GridColumnCategory } from '../../components/ui/Grid';
import { gear } from '../../lib/data';

export function GearSection() {
  return (
    <Section>
      <SectionHeader>Gear</SectionHeader>
      <GearGridContainer>
        {gear.map((item, index) => (
          <Fragment key={index}>
            <GridColumnMain>
              <TextLink newTab href={item.nameUrl} className="hover:text-foreground underline">
                {item.name}
              </TextLink>
            </GridColumnMain>
            <GridColumnCategory>
              <Text.B4 className="text-fg-secondary">{item.category}</Text.B4>
            </GridColumnCategory>
          </Fragment>
        ))}
      </GearGridContainer>
    </Section>
  );
}
