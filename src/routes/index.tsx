import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import Button from '../components/common/Button';
import { MyBeersAction } from './MyBeers';

const navItems = [
  {
    path: '/all-beers',
    label: 'All Beers',
  },
  {
    path: '/my-beers',
    label: 'My Beers',
  },
];

const Root = () => {
  const { pathname } = useLocation();
  const [, setSearchParams] = useSearchParams();

  return (
    <div className="container mx-auto">
      <nav className="m-5 flex flex-row justify-between">
        <ul className="flex">
          {navItems.map((item) => (
            <li className="me-7" key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  `inline-block text-xl font-medium sm:text-2xl ${
                    isActive || isPending
                      ? 'font-semibold text-neutral-800'
                      : 'text-gray-400 hover:font-semibold hover:text-neutral-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {pathname === '/my-beers' && (
          <Button
            theme="primary"
            className="px-3 py-2 text-sm sm:text-base"
            onClick={() => setSearchParams({ action: MyBeersAction.AddNew })}
          >
            Add a new beer
          </Button>
        )}
      </nav>
      <main className="m-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
