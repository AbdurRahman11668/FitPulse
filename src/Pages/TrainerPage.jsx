import { Link } from "react-router-dom";

const TrainerPage = ({ trainer }) => {
  const {
    _id,
    name,
    image,
    experience,
    time,
    facebook,
    instagram,
    linkedin,
    firstSlot,
    secondSlot,
    thirdSlot,
    fourthSlot,
    fivethSlot,
    sixthSlot,
  } = trainer;
  return (
    <div className="pb-10 md:flex md:justify-center lg:justify-normal">
      <div className="">
        <img src={image} className="w-64 rounded-lg mx-auto" alt="" />
      </div>
      <div className="ml-5 py-5 space-y-1 text-center lg:text-start">
        <h2 className="text-gray-700 font-bold text-xl">{name}</h2>
        <p className="text-sm font-semibold">Experience: {experience}</p>
        <p className="text-sm font-semibold">Time: {time} (Per Day)</p>
        <div className="flex py-1 justify-center lg:justify-normal">
          <a href={facebook}>
            <img
              className="w-6"
              src="https://i.ibb.co/KWzkG0J/facebook.png"
              alt=""
            />
          </a>
          <a href={instagram} className="px-2">
            <img
              className="w-6"
              src="https://i.ibb.co/n39nFrr/instagram.png"
              alt=""
            />
          </a>
          <a href={linkedin}>
            <img
              className="w-6"
              src="https://i.ibb.co/j5m8Cg6/1583140-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
        <div className="pt-5">
          <Link to={`/trainerdetails/${_id}`}>
            <button className="text-lg text-[#920638] font-medium  py-2 px-7 hover:bg-[#920638] hover:text-white border-2 border-[#920638]">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
