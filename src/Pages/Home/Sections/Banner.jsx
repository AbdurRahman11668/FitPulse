import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Banner = () => (
  <div>
    <div className="place-items-start">
      <Carousel className="">
        <div className="hero lg:place-items-start ">
          <img className="" src="https://i.ibb.co/QrS3x6Z/banner.jpg" />
          <div className="hero-content grid place-items-start sm:pt-0 lg:pt-36 sm:pl-0 lg:pl-20">
            <h3 className="sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              A Journey to Peak{" "}
              <span className="text-[#920638]">Physical Fitness</span>
            </h3>
            <p className=" lg:text-lg text-gray-300 font-medium pt-3 text-start w-[700px]">
              Embark on a transformative journey toward peak physical fitness
              with this motivational guide. Discover the power within you to
              surpass limitations and achieve your fitness goals.
            </p>
            <Link to="/classes">
              <button className="text-lg mt-5 text-white font-medium py-2 px-7 hover:bg-[#920638] hover:border-[#920638] border-2 border-white">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hero lg:place-items-start ">
          <img className="" src="https://i.ibb.co/Z1s64Bt/banner3.jpg" />
          <div className="hero-content grid place-items-start sm:pt-0 lg:pt-36 sm:pl-0 lg:pl-20">
            <h3 className="sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              Ignite Your Passion for{" "}
              <span className="text-[#920638]">Fitness</span>
            </h3>
            <p className=" lg:text-lg text-gray-300 font-medium pt-3 text-start w-[700px]">
              Get ready to ignite your passion for fitness with "Rise and
              Grind," a motivational manifesto designed to fuel your journey
              toward a healthier, stronger you. Packed with practical tips,
              motivational anecdotes, and expert advice.
            </p>
            <Link to="/classes">
              <button className="text-lg mt-5 text-white font-medium py-2 px-7 hover:bg-[#920638] hover:border-[#920638] border-2 border-white">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hero lg:place-items-start ">
          <img className="" src="https://i.ibb.co/bvp5qPQ/banner2.jpg" />
          <div className="hero-content grid place-items-start sm:pt-0 lg:pt-36 sm:pl-0 lg:pl-20">
            <h3 className="sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              Break Barriers, Build{" "}
              <span className="text-[#920638]">Strength</span>
            </h3>
            <p className=" lg:text-lg text-gray-300 font-medium pt-3 text-start w-[700px]">
              Break free from limitations and unlock your true potential with
              "Beyond Limits," a motivational guide to transcending boundaries
              and building strength, both physically and mentally.
            </p>
            <Link to="/classes">
              <button className="text-lg mt-5 text-white font-medium py-2 px-7 hover:bg-[#920638] hover:border-[#920638] border-2 border-white">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
);

export default Banner;
