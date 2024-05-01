import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import UseTrainer from "../../Hooks/UseTrainer";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isTrainer] = UseTrainer();

  const profilePicRef = useRef(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleProfilePicClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const calculateDropdownPosition = () => {
    if (profilePicRef.current) {
      const profilePicRect = profilePicRef.current.getBoundingClientRect();
      return {
        top: profilePicRect.bottom,
        left: profilePicRect.left,
      };
    }
    return { top: 0, left: 0 };
  };

  const dropdownStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    ...calculateDropdownPosition(),
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link
          className="hover:text-[#920638] hover:bg-white hover:font-semibold"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-[#920638] hover:bg-white hover:font-semibold"
          to="/gallery"
        >
          Gallery
        </Link>
      </li>
      <li className="">
        <Link
          className="hover:text-[#920638] hover:bg-white hover:font-semibold"
          to="/trainers"
        >
          Trainers
        </Link>
      </li>
      <li className="">
        <Link
          className="hover:text-[#920638] hover:bg-white hover:font-semibold"
          to="/classes"
        >
          Classes
        </Link>
      </li>
      <ul className="">
        {/* <Link
          className="hover:text-[#920638] hover:bg-white hover:font-semibold"
          to="/dashboard"
        >
          Dashboard
        </Link> */}
        {user && isAdmin && !isTrainer && (
          <li className="hover:text-[#920638] hover:bg-white hover:font-semibold rounded--lg">
            <Link to="/dashboard/adminHome" className="hover:bg-white rounded-lg">Dashboard</Link>
          </li>
        )}
        {user && !isAdmin && !isTrainer && (
          <li className="hover:text-[#920638] hover:bg-white hover:font-semibold rounded-lg">
            <Link to="/dashboard/profile" className="hover:bg-white rounded-lg">Dashboard</Link>
          </li>
        )}
        {user && !isAdmin && isTrainer && (
          <li className="hover:text-[#920638] hover:bg-white hover:font-semibold rounded--lg">
            <Link to="/dashboard/trainerHome" className="hover:bg-white rounded-lg">Dashboard</Link>
          </li>
        )}
      </ul>
      <li className="">
        <Link
          className="hover:text-[#920638] hover:bg-white hover:font-semibold"
          to="/community"
        >
          Community
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-200 text-[#920638] font-semibold">
      <div className="navbar-start sm:justify-around lg:justify-normal">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium text-[#920638]"
          >
            {navOptions}
            <div className="navbar-end justify-center lg:justify-end lg:*:hidden">
              {user ? (
                <>
                  <div className="">
                    <img
                      className="w-12 rounded-full lg:mr-20 cursor-pointer"
                      ref={profilePicRef}
                      src={user.providerData[0].photoURL}
                      alt="Profile Pic"
                      onClick={handleProfilePicClick}
                    />

                    {isDropdownVisible && (
                      <div style={dropdownStyle}>
                        {/* Your dropdown content goes here */}
                        <ul className="text-black bg-white mt-2 rounded p-5 border border-[#50ba87] lg:-ml-52">
                          <div className="text-center pb-2">
                            <li className="text-[12px] font-semibold text-[#50ba87]  mb-2">
                              {user.providerData[0].displayName}
                            </li>
                            <li className="text-[12px] font-semibold text-[#50ba87]  mb-2">
                              {user.providerData[0].email}
                            </li>
                          </div>
                          {user && isAdmin && !isTrainer && (
                            <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
                              <Link to="/dashboard/admin">Dashboard</Link>
                            </li>
                          )}
                          {user && !isAdmin && !isTrainer && (
                            <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
                              <Link to="/dashboard/profile">Dashboard</Link>
                            </li>
                          )}
                          {user && !isAdmin && isTrainer && (
                            <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
                              <Link to="/dashboard/trainer">Dashboard</Link>
                            </li>
                          )}
                          <Link to="/offer">
                            <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
                              Offer Announcements
                            </li>
                          </Link>
                          <li>
                            <button
                              onClick={handleLogOut}
                              className=" text-sm mt-2 font-semibold text-cyan-950 hover:text-[#50ba87] hover:font-medium"
                            >
                              Sign Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <button className="btn btn-ghost hover:bg-white hover:text-[#920638] font-semibold">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </div>
        <Link
          to="/"
          className="flex justify-center items-center ml-20 lg:ml-10 btn hover:bg-white hover:text-[#920638] "
        >
          <img
            className="w-14"
            src="https://i.ibb.co/LgbbCFb/logo.png"
            alt=""
          />
          <a className=" normal-case text-xl font-bold hidden md:inline">
            FitPulse
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center">{navOptions}</ul>
      </div>

      <div className="navbar-end justify-center lg:justify-end hidden lg:flex">
        {user ? (
          <>
            <div className="flex pr-10">
              <img
                className="w-12 mr-5 rounded-full cursor-pointer"
                ref={profilePicRef}
                src={user.providerData[0].photoURL}
                alt="Profile Pic"
                onClick={handleProfilePicClick}
              />

              <button
                onClick={handleLogOut}
                className=" text-sm mt-2 font-semibold text-cyan-950 hover:text-[#920638] hover:font-semibold"
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost hover:bg-white hover:text-[#920638] font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
