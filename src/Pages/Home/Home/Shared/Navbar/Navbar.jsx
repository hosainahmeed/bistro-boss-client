import { Link, useLocation } from "react-router-dom";

const MenuItems = ({ items, activePath }) => (
  <ul className="menu menu-horizontal">
    {items.map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className={`${
            activePath === item.path ? "text-primary" : ""
          } uppercase`}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

function Navbar({
  brandName = "BISTRO BOSS",
  tagline = "Restaurant",
  menuItems,
  profileOptions,
}) {
  const location = useLocation();

  return (
    <div className="navbar bg-base-100 sticky top-0 z-[999]">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-cinzel">
          <h3 className="text-nowrap">{brandName}</h3>
          <p className="text-sm">{tagline}</p>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <MenuItems items={menuItems} activePath={location.pathname} />
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="px-2">
            Menu
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path ? "text-primary" : ""
                  } uppercase`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
              />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {profileOptions.map((option) => (
              <li key={option.name}>
                <Link to={option.path} className="justify-between">
                  {option.name}
                  {option.badge && (
                    <span className="badge">{option.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  menuItems: [
    { name: "Home", path: "/" },
    { name: "CONTACT US", path: "/contact" },
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "Our Menu", path: "/menu" },
    { name: "Our Order", path: "/order" },
  ],
  profileOptions: [
    { name: "Profile", path: "/profile", badge: "New" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ],
};

export default Navbar;
