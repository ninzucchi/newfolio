import { Link, useLocation } from '@tanstack/react-router';
import { routes } from '../../lib/routes';
import css from './Nav.module.css';

const navItems = [
  { path: routes.about, label: 'About' },
  { path: routes.work, label: 'Work' },
  { path: routes.sandbox, label: 'Sandbox' },
];

export function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <Link to={routes.index} className={css.logo}>
          Portfolio
        </Link>
        <ul className={css.navList}>
          {navItems.map((item) => {
            const isActive =
              currentPath === item.path ||
              (item.path === routes.work && currentPath.startsWith('/work'));
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${css.navLink} ${isActive ? css.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

