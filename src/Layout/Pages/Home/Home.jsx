import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Event from "./EmployeeHome/Event/Event";
import MonthlyRequests from "./EmployeeHome/MonthlyRequest/MonthlyRequests";
import PendingRequest from "./EmployeeHome/PendingRequest/PendingRequest";
import EmployeesRequests from "./HrHome/EmployeesRequests/EmployeesRequests";
import LimitedStock from "./HrHome/LimitedStock/LimitedStock";
import MaxAssetsUsers from "./HrHome/MaxAssetsUsers/MaxAssetsUsers";
import MostRequested from "./HrHome/MostRequested/MostRequested";
import NextEvent from "./HrHome/NextEvent/NextEvent";
import PieCharts from "./HrHome/PieChart/PieCharts";
import OurPackages from "./OurPackages/OurPackages";
import Slider from "./Slider/Slider";
import useAuthInfo from "../../../hooks/useAuthInfo";
import usePckgAndEmplyLmt from "../../../hooks/usePckgAndEmplyLmt";
import { Navigate } from "react-router-dom";

const Home = () => {

    const { employee, hr, user, employeeInfo } = useAuthInfo()
    const [packageLimit] = usePckgAndEmplyLmt()
    console.log(packageLimit);

    if (!employee && !hr && !user) {
        return (
            <div className="md:mb-24 sm:mb-16 mb-8 lg:mb-32">
                <Helmet>
                    <title>Home | Assetify</title>
                </Helmet>
                <Slider></Slider>
                <About></About>
                <OurPackages></OurPackages>
            </div>
        );
    }

    else if (employee && user) {
        return (
            employeeInfo.hired ?
                <div>
                    <Helmet>
                        <title>Home | Company</title>
                    </Helmet>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        <PendingRequest></PendingRequest>
                        <MonthlyRequests></MonthlyRequests>
                        <Event></Event>
                    </div>
                </div> :
                <div>
                    <p className="text-center uppercase font-raleway text-[#8f8f8f]">You are not connected with any company. Please contact with you HR manger</p>
                </div>
        )
    }
    else if (hr && user) {
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Helmet >
                    <title>Home | Company</title>
                </Helmet >

                {packageLimit ?
                    <>
                        <EmployeesRequests></EmployeesRequests>
                        <MostRequested></MostRequested>
                        <LimitedStock></LimitedStock>
                        <PieCharts></PieCharts>
                        <MaxAssetsUsers></MaxAssetsUsers>
                        <NextEvent></NextEvent>
                    </> :
                    <Navigate to='/packages'></Navigate>
                }
            </div >
        )
    }
};

export default Home;