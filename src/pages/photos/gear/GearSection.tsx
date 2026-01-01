import { GridCell, GridCellRight } from '@/components/ui/grid/GridCell';
import { SectionCollapsible } from '@/components/ui/section/Section';
import { Text } from '@/components/ui/text/Text';
import { TextLink } from '@/components/ui/text/TextLink';
import { gear } from '@/lib/data';
import { GearGrid } from '@/pages/photos/gear/GearGrid';
import { Fragment } from 'react';

export function GearSection() {
  return (
    <SectionCollapsible title="Gear">
      <GearGrid>
        {gear.map((item, index) => (
          <Fragment key={index}>
            <GridCell>
              <TextLink newTab href={item.nameUrl} className="hover:text-foreground underline">
                {item.name}
              </TextLink>
            </GridCell>
            <GridCellRight>
              <Text.B4 className="text-fg-secondary">{item.category}</Text.B4>
            </GridCellRight>
          </Fragment>
        ))}
      </GearGrid>
    </SectionCollapsible>
  );
}
