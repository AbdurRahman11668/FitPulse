import { Helmet } from "react-helmet";
import useTrainersData from "../Hooks/useTrainersData";
import { Link } from "react-router-dom";
import UseTrainer from "../Hooks/UseTrainer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const TrainersPage = () => {
    
  const [trainers] = useTrainersData();
  const { user} = useContext(AuthContext);
  const [isTrainer] = UseTrainer();

  return (
    <div className="lg:w-[80%] mx-auto pb-10">
      <Helmet>
        <title>FitPulse | Trainers</title>
      </Helmet>

      <h2 className="text-center my-10 text-2xl md:text-3xl lg:text-4xl text-[#920638] font-bold">
        Trainers
      </h2>
      {user && isTrainer && (
        <li>
          {trainers.name}
        </li>
      )}

        <div className="px-5 md:px-20 lg:px-0">
          <h2 className="text-center py-5 text-2xl md:text-3xl lg:text-4xl text-[#920638] font-bold">Want to Become a Trainer?</h2>

          <p className="text-center pb-5 font-medium">Before you apply, read carefully all the requirements!</p>
          <p className="text-lg font-semibold underline">Requirements:</p>
          <p className="font-semibold">1. Knowledge of Fitness and Nutrition.</p>
          <p className="font-semibold">2. Experience</p>
          <p className="font-semibold">3. Communication Skills</p>
          <p className="font-semibold">4. Physical Fitness</p>
          <p className="font-semibold">5. Education and Certification</p>

          <Link to="beatrainer" className="flex justify-center">
            <button className="text-lg mt-10 hover:text-[#920638] font-medium  py-2 px-7 bg-[#920638] hover:bg-white text-white border-2 border-[#920638]">Be a Trainer</button>
          </Link>
        </div>
    </div>
  );
};

export default TrainersPage;
