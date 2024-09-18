import { Link, useNavigate } from "react-router-dom";
import useCart from "../../../../../hooks/useCart";
import useAuth from "../../../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li className="btn btn-ghost btn-circle">
        <Link to="/dashboard/mycart">
        
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">+{cart?.length }</span>
        </div>
        </Link>
      </li>

      {user ? (
        <li onClick={handleLogOut}>
          <Link to="/login">LogOut</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-80 max-w-screen-2xl mx-auto bg-black text-white flex items-center justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex items-center justify-center">{navOptions}</ul>
      </div>
    </div>
  );
};

export default NavBar;
