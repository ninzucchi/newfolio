import { useLocation, useNavigate } from '@tanstack/react-router';
import { routes } from '../../lib/routes';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { AvatarLink } from './AvatarLink';

const navItems = [
  { path: routes.about, label: 'About', value: 'about' },
  { path: routes.work, label: 'Work', value: 'work' },
  { path: routes.sandbox, label: 'Sandbox', value: 'sandbox' },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Determine active tab value
  const getActiveValue = () => {
    if (currentPath === routes.about || currentPath === routes.index) return 'about';
    if (currentPath.startsWith('/work')) return 'work';
    if (currentPath === routes.sandbox) return 'sandbox';
    return 'about';
  };

  const handleValueChange = (value: string) => {
    const item = navItems.find((item) => item.value === value);
    if (item) {
      navigate({ to: item.path });
    }
  };

  return (
    <nav className="sticky top-0 z-[100] border-b border-border bg-background">
      <div className="flex items-center justify-between max-w-[1000px] mx-auto p-5">
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
        <Button variant="secondary" size="sm">
          Reach out
        </Button>
      </div>
    </nav>
  );
}
