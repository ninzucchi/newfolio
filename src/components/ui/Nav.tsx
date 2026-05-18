import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { routes } from '@/lib/routes';
import { useLocation, useNavigate } from '@tanstack/react-router';

const navItems = [
  { path: routes.index, label: 'About', value: 'index' },
  { path: routes.photos, label: 'Photos', value: 'photos' },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Determine active tab value
  const getActiveValue = () => {
    if (currentPath === routes.index) return 'index';
    if (currentPath === routes.photos) return 'photos';
    return 'index';
  };

  const handleValueChange = (value: string) => {
    const item = navItems.find((item) => item.value === value);
    if (item) {
      navigate({ to: item.path });
    }
  };

  return (
    <nav className="bg-nav-gradient sticky top-0 z-1">
      <div className="mx-auto flex max-w-[640px] items-center justify-center p-5">
        <Tabs value={getActiveValue()} onValueChange={handleValueChange}>
          <TabsList>
            {navItems.map((item) => (
              <TabsTrigger key={item.path} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </nav>
  );
}
