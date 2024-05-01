import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeaTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const packages = {
        name: data.name,
        email: data.email,
        image: res.data.data.display_url,
        facebook: data.facebook,
        instagram: data.instagram,
        linkedin: data.linkedin,
        time: data.time,
        firstslot: data.firstslot,
        secondslot: data.secondslot,
        thirdslot: data.thirdslot,
        fourthslot: data.fourthslot,
        fivthslot: data.fivthslot,
        sixthslot: data.sixthslot,
        experience: data.experience,
      };
      //
      const menuRes = await axiosSecure.post("/trainer", packages);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Tourist Club | Sign Up</title>
      </Helmet>
      <div className="hero pt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left hidden lg:contents">
            {/* <img src={img} className="ml-20" alt="" /> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body mx-10 px-0 md:px-5"
            >
              <div className="form-control">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  {...register("facebook", { required: true })}
                  placeholder="Facebook ID Link"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("instagram", { required: true })}
                  placeholder="Instagram ID Link"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("linkedin", { required: true })}
                  placeholder="LinkedIn ID Link"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  {...register("time", { required: true })}
                  placeholder="Time (min 6hrs per day)"
                  className="input input-bordered"
                />
                {errors.time && (
                  <span className="text-red-600">Time is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("firstslot", { required: true })}
                  placeholder="FirstSlot"
                  className="input input-bordered"
                />
                {errors.firstslot && (
                  <span className="text-red-600">FirstSlot is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("secondslot", { required: true })}
                  placeholder="SecondSlot"
                  className="input input-bordered"
                />
                {errors.secondslot && (
                  <span className="text-red-600">SecondSlot is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("thirdslot", { required: true })}
                  placeholder="ThirdSlot"
                  className="input input-bordered"
                />
                {errors.thirdslot && (
                  <span className="text-red-600">ThirdSlot is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("fourthslot", { required: true })}
                  placeholder="FourthSlot"
                  className="input input-bordered"
                />
                {errors.fourthslot && (
                  <span className="text-red-600">FourthSlot is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("fivthslot", { required: true })}
                  placeholder="FivthSlot"
                  className="input input-bordered"
                />
                {errors.fivthslot && (
                  <span className="text-red-600">FivthSlot is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("sixthslot", { required: true })}
                  placeholder="SixthSlot"
                  className="input input-bordered"
                />
                {errors.sixthslot && (
                  <span className="text-red-600">SixthSlot is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("experience", { required: true })}
                  placeholder="Experience"
                  className="input input-bordered"
                />
                {errors.experience && (
                  <span className="text-red-600">Experience is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeaTrainer;
