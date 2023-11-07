import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addBook'>Add Book</NavLink></li>
            <li><NavLink to='/allBook'>All Book</NavLink></li>
            <li><NavLink to='/borrowedBooks'>Borrowed Books</NavLink></li>
            
        </>
    )

  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-20" src={`https://i.ibb.co/z2sMpY4/Screenshot-2023-11-05-115955-removebg-preview.png`} alt="" />
            <Link to='/' className="btn btn-ghost normal-case text-2xl">EduLink Library</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
        <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register' className="btn btn-outline ml-5">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
