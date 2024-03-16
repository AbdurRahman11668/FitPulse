// import { useContext, useRef, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import useAdmin from "../../Hooks/useAdmin";
// import useGuide from "../../Hooks/UseGuide";
// import useWishlist from "../../Hooks/useWishlist";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const [isGuide] = useGuide();
//   const [wishlist] = useWishlist();

//   const profilePicRef = useRef(null);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const handleProfilePicClick = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   const calculateDropdownPosition = () => {
//     if (profilePicRef.current) {
//       const profilePicRect = profilePicRef.current.getBoundingClientRect();
//       return {
//         top: profilePicRect.bottom,
//         left: profilePicRect.left,
//       };
//     }
//     return { top: 0, left: 0 };
//   };

//   const dropdownStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     ...calculateDropdownPosition(),
//   };

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li>
//         <Link
//           className="hover:text-[#50ba87] hover:bg-white hover:font-medium"
//           to="/"
//         >
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link
//           className="hover:text-[#50ba87] hover:bg-white hover:font-medium"
//           to="/community"
//         >
//           Community
//         </Link>
//       </li>
//       <li className="">
//         <Link
//           className="hover:text-[#50ba87] hover:bg-white hover:font-medium"
//           to="/blog"
//         >
//           Blog
//         </Link>
//       </li>
//       <li className="">
//         <Link
//           className="hover:text-[#50ba87] hover:bg-white hover:font-medium"
//           to="/about"
//         >
//           About us
//         </Link>
//       </li>
//       <li className="">
//         <Link
//           className="hover:text-[#50ba87] hover:bg-white hover:font-medium"
//           to="/contact"
//         >
//           Contact us
//         </Link>
//       </li>
//       <li>
//         <Link to="/dashboard/wishlist">
//           <button className="btn">
//             <FaShoppingCart className="mr-2"></FaShoppingCart>
//             <div className="badge badge-secondary">+{wishlist.length}</div>
//           </button>
//         </Link>
//       </li>
//     </>
//   );

  return (
    // <div className="navbar fixed z-10 bg-opacity-30 max-w-6xl bg-black text-white">
    //   <div className="navbar-start sm:justify-around lg:justify-normal">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium text-[#50ba87]"
    //       >
    //         {navOptions}
    //       </ul>
    //     </div>
    //     <Link
    //       to="/"
    //       className="flex justify-center items-center ml-20 lg:ml-10 btn btn-neutral"
    //     >
    //       <img
    //         className="w-5 h-8"
    //         src="https://i.ibb.co/gFdpDGM/logo.png"
    //         alt=""
    //       />
    //       <a className=" normal-case text-xl hover:[#50ba87]">
    //         Tourist Club
    //       </a>
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal items-center">{navOptions}</ul>
    //   </div>

    //   <div className="navbar-end justify-center lg:justify-end">
    //     {user ? (
    //       <>
    //         <div className="">
    //           <img
    //             className="w-12 rounded-full lg:mr-20 cursor-pointer"
    //             ref={profilePicRef}
    //             src={user.providerData[0].photoURL}
    //             alt="Profile Pic"
    //             onClick={handleProfilePicClick}
    //           />

    //           {isDropdownVisible && (
    //             <div style={dropdownStyle}>
    //               {/* Your dropdown content goes here */}
    //               <ul className="text-black bg-white mt-2 rounded p-5 border border-[#50ba87] lg:-ml-52">
    //                 <div className="text-center pb-2">
    //                   <li className="text-[12px] font-semibold text-[#50ba87]  mb-2">
    //                     {user.providerData[0].displayName}
    //                   </li>
    //                   <li className="text-[12px] font-semibold text-[#50ba87]  mb-2">
    //                     {user.providerData[0].email}
    //                   </li>
    //                 </div>
    //                 {user && isAdmin && !isGuide && (
    //                   <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
    //                     <Link to="/dashboard/adminHome">Dashboard</Link>
    //                   </li>
    //                 )}
    //                 {user && !isAdmin && !isGuide && (
    //                   <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
    //                     <Link to="/dashboard/profile">Dashboard</Link>
    //                   </li>
    //                 )}
    //                 {user && !isAdmin && isGuide && (
    //                   <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
    //                     <Link to="/dashboard/guideHome">Dashboard</Link>
    //                   </li>
    //                 )}
    //                 <Link to="/offer">
    //                   <li className="text-sm font-semibold text-cyan-950 hover:text-[#50ba87] ">
    //                     Offer Announcements
    //                   </li>
    //                 </Link>
    //                 <li>
    //                   <button
    //                     onClick={handleLogOut}
    //                     className=" text-sm mt-2 font-semibold text-cyan-950 hover:text-[#50ba87] hover:font-medium"
    //                   >
    //                     Sign Out
    //                   </button>
    //                 </li>
    //               </ul>
    //             </div>
    //           )}
    //         </div>
    //       </>
    //     ) : (
    //       <Link to="/login">
    //         <button className="btn btn-ghost hover:text-red-600 hover:font-medium">
    //           Login
    //         </button>
    //       </Link>
    //     )}
    //   </div>
    // </div>
    <div>
        <p>Abdur</p>
    </div>
  );
};

export default Navbar;
