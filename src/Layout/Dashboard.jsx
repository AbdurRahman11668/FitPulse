import {
    FaAd,
    FaBook,
    FaCalendar,
    FaEnvelope,
    FaHome,
    FaList,
    FaSearch,
    FaShoppingCart,
    FaUsers,
    FaUtensils,
  } from "react-icons/fa";
  import { NavLink, Outlet } from "react-router-dom";
  
  import useAdmin from "../Hooks/useAdmin";
import UseTrainer from "../Hooks/UseTrainer";
const Dashboard = () => {
    const [isAdmin] = useAdmin();
  const [useTrainer] = UseTrainer();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen py-10  bg-gradient-to-r from-[#920638] to-[#920638] px-5">
      {/* dashboard side bar */}
      <div className="lg:w-52 bg-[#211C19] text-white rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li className="hover:text-white">
                <NavLink
                  to="/dashboard/adminhome"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaHome></FaHome>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addpackages"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaUtensils></FaUtensils>
                  Add Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/subscribers"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaUsers></FaUsers>
                  All Subscribers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/alltrainers"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaUsers></FaUsers>
                  All Trainers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appliedtrainers"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaUsers></FaUsers>
                  Applied Trainers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/balance"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaUsers></FaUsers>
                  Balance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) :  useTrainer ?  (
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaHome></FaHome>
                  Guide Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/assignedtours"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaList></FaList>
                  Assigned Tours
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/wishlist"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaShoppingCart></FaShoppingCart>
                  My Wishlist{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="hover:text-white hover:bg-[#920638]"
                >
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to="/" className="hover:text-white hover:bg-[#920638]">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allpackages"
              className="hover:text-white hover:bg-[#920638]"
            >
              <FaSearch></FaSearch>
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-white hover:bg-[#920638]"
            >
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8 bg-white rounded-b-2xl lg:rounded-bl-none  lg:rounded-r-2xl">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;