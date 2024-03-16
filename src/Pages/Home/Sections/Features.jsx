import { Helmet } from "react-helmet-async";

const Features = () => {
  return (
    <div className="pb-10">
      <Helmet>
        <title>Fitpulse | Features</title>
      </Helmet>
      <div className="px-10">
        <h2>Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-5 gap-5 md:gap-0">
          {/* 1 */}
          <div className="text-center border md:border-0 lg:border-b lg:border-r border-[#920638] p-5 hover:border-2 md:hover:border-0 lg:hover:border-b-2 lg:hover:border-r-2">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/t8Hq9DG/body-building.png"
              alt=""
            />
            <h3 className="font-bold text-2xl my-5 text-[#920638]">
              Body Building
            </h3>
            <p className="font-bold text-sm">
              Unleash your inner strength and sculpt your ideal physique with
              Body Building Mastery.
            </p>
          </div>
          {/* 2 */}
          <div className="text-center border md:border-0 lg:border-b lg:border-r border-[#920638] p-5 hover:border-2 md:hover:border-0 lg:hover:border-b-2 lg:hover:border-r-2">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/BfWMvq5/lifting.png"
              alt=""
            />
            <h3 className="font-bold text-2xl my-5 text-[#920638]">
              Weight Lifting
            </h3>
            <p className="font-bold text-sm">
              Elevate your strength training game with Weightlifting Emporium.
            </p>
          </div>
          {/* 3 */}
          <div
            className="text-center border md:border-0 lg:border-b border-[#920638] p-5 hover:border-2 md:hover:border-0 lg:hover:border-b-2 lg:hover:border-r-2"
          >
            <img
              className="w-24 mx-auto"
              src="
https://i.ibb.co/6rnhZZ4/musculation.png"
              alt=""
            />
            <h3 className="font-bold text-2xl my-5 text-[#920638]">
              Musculation
            </h3>
            <p className="font-bold text-sm">
              Explore cutting-edge training methodologies, nutritional
              strategies
            </p>
          </div>
          {/* 4 */}
          <div className="text-center border md:border-0 lg:border-b lg:border-r border-[#920638] p-5 hover:border-2 md:hover:border-0 lg:hover:border-b-2 lg:hover:border-r-2">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/0C1tpnj/running.png
              "
              alt=""
            />
            <h3 className="font-bold text-2xl my-5 text-[#920638]">Running</h3>
            <p className="font-bold text-sm">
              Lace up your shoes and join the Running community as we conquer
              miles.
            </p>
          </div>
          {/* 5 */}
          <div className="text-center border md:border-0 lg:border-b lg:border-r border-[#920638] p-5 hover:border-2 md:hover:border-0 lg:hover:border-b-2 lg:hover:border-r-2">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/RTz4xWK/yoga.png"
              alt=""
            />
            <h3 className="font-bold text-2xl my-5 text-[#920638]">Yoga</h3>
            <p className="font-bold text-sm">
              Discover transparence and strength through our Yoga Oasis section.
            </p>
          </div>
          {/* 6 */}
          <div className="text-center border md:border-0 lg:border-b border-[#920638] p-5 hover:border-2 md:hover:border-0 lg:hover:border-b-2 lg:hover:border-r-2">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/wzdkTzh/zumba.png"
              alt=""
            />
            <h3 className="font-bold text-2xl my-5 text-[#920638]">Zumba</h3>
            <p className="font-bold text-sm">
              Shake up your fitness routine with Zumba Fiesta! Get ready to
              groove.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
