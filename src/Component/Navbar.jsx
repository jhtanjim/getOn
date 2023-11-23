import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-[#f85606] text-white flex flex-col justify-center items-center h-full">
    {/* Search Bar */}
    <div className="flex flex-col justify-center items-center w-full lg:px-10">

    <div className="navbar bg-base-100">
      <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#911e2b] rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="category">Category</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="text-3xl font-extrabold lg:ml-0 ml-10">
           GetOn
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="category">Category</Link>
            </li>
            
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4 relative pl-20">
      <input
        type="text"
        placeholder="Search..."
        className="px-8 lg:px-32 py-2 bg-white text-gray-800 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#911e2b] "
      />
      <button className="px-8 py-3 bg-[#911e2b] text-white rounded-full shadow-md absolute right-0">
      <FaSearch />
      </button>
    </div>

        </div>
        <div className="navbar-end">
        <div className="flex items-center gap-4">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#911e2b] shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://pxbar.com/wp-content/uploads/2023/09/instagram-dp-boy-attitude-683x1024.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#911e2b] rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
          </div>
    </div>



  </div>
</div>
  );
};

export default Navbar;
