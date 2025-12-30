import { useLocation, useNavigate } from '@tanstack/react-router';
import { routes } from '../../lib/routes';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { AvatarLink } from './AvatarLink';

const navItems = [
  { path: routes.about, label: 'About', value: 'about' },
  { path: routes.photos, label: 'Photos', value: 'photos' },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Determine active tab value
  const getActiveValue = () => {
    if (currentPath === routes.about || currentPath === routes.index) return 'about';
    if (currentPath === routes.photos) return 'photos';
    return 'about';
  };

  const handleValueChange = (value: string) => {
    const item = navItems.find((item) => item.value === value);
    if (item) {
      navigate({ to: item.path });
    }
  };

  return (
    <nav className="border-border bg-background sticky top-0 z-[100] border-b">
      <div className="mx-auto flex max-w-[640px] items-center justify-between p-5">
        <AvatarLink />
        <Tabs value={getActiveValue()} onValueChange={handleValueChange}>
          <TabsList>
            {navItems.map((item) => (
              <TabsTrigger key={item.path} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button>Reach out</Button>
      </div>
    </nav>
  );
}
