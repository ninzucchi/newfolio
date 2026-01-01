import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { GridCell } from '@/components/ui/grid/GridCell';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Text } from '@/components/ui/text/Text';

export function BioHeader() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-11 w-11">
        <AvatarImage src={'/avatar.jpg'} alt="Nick Inzucchi" />
      </Avatar>
      <GridCell className="flex-1">
        <Text.B1>Nick Inzucchi</Text.B1>
        <Text.B4 className="text-fg-secondary">Designer, engineer, product generalist</Text.B4>
      </GridCell>
      <SocialLinks />
    </div>
  );
}
