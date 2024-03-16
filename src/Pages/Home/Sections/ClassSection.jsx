import { Link } from "react-router-dom";

const ClassSection = ({ service }) => {
  const { _id, image, title, descrition, day, time } = service;
  return (
    <div className="">
      <div className="card mx-auto bg-base-100 pt-5 shadow-2xl ">
        <figure className="px-10 ">
          <img src={image} alt="" className="rounded-lg" />
        </figure>
        <div className="card-body px-12">
          <h2 className="card-title text-[#920638]">{title}</h2>
          <p>{descrition.slice(0, 90)} ...</p>
          <div className="card-actions">
            <Link to={`/classdetails/${_id}`}>
              <button className="px-8 py-2 hover:bg-[#920638] border-2 border-[#920638] hover:border-[#920638] text-lg font-medium hover:text-white text-[#920638] mt-5 rounded">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClassSection;
