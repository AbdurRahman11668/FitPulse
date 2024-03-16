import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-white divide-y bg-gray-200 dark:text-gray-50">
        <div className="container flex flex-col justify-between p-4 mx-auto md:px-8 lg:flex-row divide-gray-400">
          <div>
          <ul className="self-center space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start mt-2">
            <Link
              to="/"
              className="flex justify-center text-center items-center btn bg-gray-400"
            >
              <img
                className="w-14"
                src="https://i.ibb.co/LgbbCFb/logo.png"
                alt=""
              />
              <a className=" normal-case text-xl hover:text-[#920638]">
                FitPulse
              </a>
            </Link>
          </ul>
          </div>
          <div className="py-6 text-sm font-medium text-center dark:text-gray-400">
            ©COPYRIGHT 2023 Tourist Club . All rights reserved.
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center space-x-4">
              <Link
                to="https://www.twitter.com/"
                className="text-2xl text-[#920638] hover:text-[#50ba87]"
              >
                <FaTwitter></FaTwitter>
              </Link>
              <Link
                to="https://www.youtube.com/"
                className="text-2xl text-[#920638] hover:text-[#50ba87]"
              >
                <FaYoutube></FaYoutube>
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="text-2xl text-[#920638] hover:text-[#50ba87]"
              >
                <FaFacebook></FaFacebook>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
