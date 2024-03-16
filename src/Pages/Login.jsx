import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
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
        <title>FitPlus | Login</title>
      </Helmet>

      <div className="flex flex-wrap lg:items-center w-full">
        <div className="w-2/3 pl-20">
          <div className="text-center">
            <h3 className="text-3xl lg:text-5xl text-[#920638]  font-bold">Login to Your Account</h3>
            <p className="text-gray-600 font-medium py-3">Login using social networks</p>

            <SocialLogin></SocialLogin>

            <div className="flex text-center items-center px-36">
              <div className="w-2/5 divider"></div>
              <div className="w-1/5 text-sm">OR</div>
              <div className="w-2/5 divider"></div>
            </div>
          </div>
          <form onSubmit={handleLogin} className="card-body p-0 px-36">
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
              <div className="form-control mt-6">
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

        <div className="lg:min-h-[90vh] w-1/3 bg-[#920638]">
          <p>Abff</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
