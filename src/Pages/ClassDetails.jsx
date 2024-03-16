import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ClassDetails = () => {
  const classes = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>FitPulse | Classes Details</title>
      </Helmet>
      <div>
        <div className="pt-5 pb-10">
          <figure className="px-10 ">
            <img
              src={classes.image}
              alt=""
              className="rounded-lg w-1/2 mx-auto"
            />
          </figure>
          <div className="card-body px-12">
            <h2 className="card-title text-2xl py-2 md:text-4xl text-[#920638]">
              {classes.title}
            </h2>
            <p>{classes.descrition}</p>
            <p className="font-semibold text-[#920638]">Date: {classes.Day}</p>
            <p className="font-semibold text-[#920638]">Time: {classes.Time}</p>
            <div className="card-actions">
              <button className="px-8 py-2 hover:bg-[#920638] border-2 border-[#920638] hover:border-[#920638] text-lg font-medium hover:text-white text-[#920638] mt-5 rounded">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
