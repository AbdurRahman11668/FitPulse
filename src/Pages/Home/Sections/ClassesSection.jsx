import { Link } from "react-router-dom";
import useClasses from "../../../Hooks/useClasses";
import ClassSection from "./ClassSection";

const ClassesSection = () => {
    const classes = useClasses()
  return (
    <div className="py-10 px-10">
      <h2 className="text-[#920638] pb-5 text-center font-bold text-4xl mb-10">
        CLASSES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.slice(0, 6).map((service) => (
            <ClassSection
              key={service._id}
              service={service}
            ></ClassSection>
          ))}
        </div>
        <div className="flex justify-center mb-10">
        <Link to={`/allClasses`}>
          <button className="px-8 py-2 bg-[#920638] hover:bg-transparent hover:border-2 border-2 border-[#920638] text-lg font-medium text-white hover:text-[#920638] mt-8 rounded">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassesSection;
