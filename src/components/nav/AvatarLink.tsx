import { Link } from '@tanstack/react-router';
import { routes } from '../../lib/routes';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import avatarImage from '../../assets/images/avatar.jpg';

export function AvatarLink() {
  return (
    <Link to={routes.index} className="flex items-center">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarImage} alt="Nick Inzucchi" />
        <AvatarFallback>NI</AvatarFallback>
      </Avatar>
    </Link>
  );
}

