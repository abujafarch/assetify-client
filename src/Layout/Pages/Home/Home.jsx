import useUserStatus from "../../../hooks/useUserStatus";
import About from "./About/About";
import Event from "./EmployeeHome/Event/Event";
import MonthlyRequests from "./EmployeeHome/MonthlyRequest/MonthlyRequests";
import PendingRequest from "./EmployeeHome/PendingRequest/PendingRequest";
import OurPackages from "./OurPackages/OurPackages";
import Slider from "./Slider/Slider";

const Home = () => {

    const [employee, hr] = useUserStatus()

    if (!employee && !hr) {
        return (
            <div className="md:mb-24 sm:mb-16 mb-8 lg:mb-32">
                <Slider></Slider>
                <About></About>
                <OurPackages></OurPackages>
            </div>
        );
    }

    else if (employee) {
        return (
            <div className="pt-20 pb-5 bg-[#0f172a] min-h-screen">
                <div className="lg:py-28 md:py-20 sm:pt-14 pt-8 max-w-[1320px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 sm:px-6 md:px-8 lg:px-10">
                    <PendingRequest></PendingRequest>
                    <MonthlyRequests></MonthlyRequests>
                    <Event></Event>
                </div>
            </div>
        )
    }
};

export default Home;