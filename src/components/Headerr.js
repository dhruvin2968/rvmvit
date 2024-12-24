import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.jpeg";

export const Headerr = () => {
  const [hidden, setHidden] = useState(false);

  const activeClass =
    "text-base block py-2 px-3  text-Redd bg-white rounded-full   md:p-2";
    // const inactiveClass =
    // "text-base block py-2 px-3 text-white hover:underline hover:underline-offset-4 bg-black rounded-full md:p-2 transition-all duration-500";
    const inactiveClass =
    "text-base block py-2 px-3 text-white hover:underline md:hover:underline-offset-4 bg-black rounded-full md:p-2 transition-[text-decoration] duration-300 ease-in-out";
  
  return (
    <header>
      <nav className="bg-black font-serif border-b-2 border-gray-600 px-2 sm:px-4 py-1">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          {/* <Link
            to="/"
            className="flex items-center space-x-3 text-3xl rtl:space-x-reverse"
          >
            <img src={Logo} className="h-16 " alt="Cinemate_by_Dhruvin" />
            <span className="self-center font-extrabold whitespace-nowrap text-white">
              RevMechanics
            </span>
            <span>Rev Till You Die</span>
          </Link> */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-16" alt="" />
      <div className="flex flex-col items-start"> {/* Align text to the left */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"><span className="text-Redd">R</span>ev<span className="text-Redd">M</span>echanics</span>
        <span className="logo-motto  font-bold text-sm bg-gradient-to-r font-serif  from-Redd via-white to-yellow-500 bg-clip-text text-transparent ml-4"> Rev Till You Die....</span>
      </div>
    </Link>

          <div id="mobile-nav" className="flex md:order-2">
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center bg-black text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="nav-links, navbar-search"
            className={`${
              hidden ? "hidden" : "empty"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border-2 border-white rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
              {/* //above line is for mobile */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              
              
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/departments"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
