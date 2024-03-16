const AboutSection = () => {
  return (
    <div className="px-10 md:px-10 pb-5">
      <h2 className="text-[#920638] pb-5 text-center font-bold text-4xl mb-10">
        ABOUT
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
            <img className="rounded" src="https://i.ibb.co/DCqPQ8h/about.jpg" alt="" />
        </div>
        <div className="">
            <h3 className="mb-5 font-bold text-gray-800 text-2xl">Welcome to <span className="text-[#920638] font-bold text-3xl">FitPulse</span></h3>
          <p className="mb-2">
            Welcome to FitPulse, your ultimate destination for all things
            fitness and wellness! At FitPulse, we are passionate about helping
            you achieve your health and fitness goals, no matter your level of
            experience or background. Our mission is to empower and inspire
            individuals to lead active, balanced lifestyles through accessible
            and informative content, expert advice, and community support.
          </p>
          <p>
            Whether you're looking to build strength, improve flexibility, lose
            weight, or simply enhancFe your overall well-being, FitPulse is here
            to guide you every step of the way. From workout routines and
            nutrition tips to mindfulness practices and motivational stories, we
            offer a comprehensive resource hub to support your journey to a
            healthier you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
