import About from "./About/About";
import OurPackages from "./OurPackages/OurPackages";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div className="mb-40">
            <Slider></Slider>
            <About></About>
            <OurPackages></OurPackages>
        </div>
    );
};

export default Home;