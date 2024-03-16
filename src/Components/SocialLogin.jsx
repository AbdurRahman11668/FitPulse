import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
        
    }

    return (
        <div className="w-full">
            <div className="">
                <button onClick={handleGoogleSignIn} className="">
                    <img className="w-8" src="https://i.ibb.co/3hvSBT9/google-plus-logo-4.png" alt="" />
                </button>
                <button className="px-2">
                    <img className="w-8" src="https://i.ibb.co/KWzkG0J/facebook.png" alt="" />
                </button>
                <button>
                    <img className="w-8" src="https://i.ibb.co/j5m8Cg6/1583140-removebg-preview.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;