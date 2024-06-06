import useUserStatus from "../../../hooks/useUserStatus";
import About from "./About/About";
import Event from "./EmployeeHome/Event/Event";
import MonthlyRequests from "./EmployeeHome/MonthlyRequest/MonthlyRequests";
import PendingRequest from "./EmployeeHome/PendingRequest/PendingRequest";
import EmployeesRequests from "./HrHome/EmployeesRequests/EmployeesRequests";
import LimitedStock from "./HrHome/LimitedStock/LimitedStock";
import MostRequested from "./HrHome/MostRequested/MostRequested";
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
            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    <PendingRequest></PendingRequest>
                    <MonthlyRequests></MonthlyRequests>
                    <Event></Event>
                </div>
            </div>
        )
    }
    else if (hr) {
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <EmployeesRequests></EmployeesRequests>
                <MostRequested></MostRequested>
                <LimitedStock></LimitedStock>
            </div>
        )
    }
};

export default Home;