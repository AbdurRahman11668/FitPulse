import { Helmet } from "react-helmet-async";
import Banner from "./Sections/Banner";
import Features from "./Sections/Features";
import AboutSection from "./Sections/AboutSection";
import ClassesSection from "./Sections/ClassesSection";
import TeamSection from "./Sections/TeamSection";
import Testimonials from "./Sections/Testimonials";
import Blog from "./Sections/Blog";
import Newsletter from "./Sections/Newsletter";

const Home = () => {
    return (
        <div className="pb-10">
            <Helmet>
                <title>Tourist Club | Home</title>
            </Helmet>
            <Banner></Banner>
            <Features></Features>
            <AboutSection></AboutSection>
            <ClassesSection></ClassesSection>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;