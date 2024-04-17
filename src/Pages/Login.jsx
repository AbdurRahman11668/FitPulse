import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Helmet>
        <title>FitPulse | Login</title>
      </Helmet>

      <div className="flex flex-wrap lg:items-center w-full">
        <div className="lg:w-2/3 py-10 lg:pl-20 mx-auto lg:mx-0">
          <div className="text-center">
            <h3 className="text-3xl lg:text-5xl text-[#920638]  font-bold">
              Login to Your Account
            </h3>
            <p className="text-gray-600 font-medium py-3">
              Login using social networks
            </p>

            <SocialLogin></SocialLogin>

            <div className="flex text-center lg:px-36  items-center">
              <div className="w-2/5 divider"></div>
              <div className="w-1/5 text-sm">OR</div>
              <div className="w-2/5 divider"></div>
            </div>
          </div>
          <form onSubmit={handleLogin} className="card-body p-0 lg:px-36">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-2xl"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-2xl"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mt-6 mx-auto">
              {/* TODO: apply disabled for re captcha */}
              <input
                disabled={false}
                className="btn border-2 border-[#920638] bg-white text-[#920638] hover:bg-[#920638] hover:text-white text-lg font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="lg:min-h-[90vh] lg:w-1/3 mx-auto lg:mx-0 py-10 lg:pt-52 bg-[#920638]">
          <h3 className=" text-center text-3xl lg:text-5xl text-white  font-bold">
            New Here?
          </h3>
          <p className="text-center px-14 lg:px-14 text-gray-300 font-medium py-5">
            Sign up and discover a great amont of new opportunities!
          </p>
          <p className="text-center">
              <Link
                className="text-[#920638] border-2 border-white bg-white font-semibold text-lg btn hover:bg-transparent hover:text-white hover:border-2  px-10"
                to="/register"
              >
                Sign Up
              </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
