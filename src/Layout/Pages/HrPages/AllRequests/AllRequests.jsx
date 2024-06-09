import { Helmet } from "react-helmet-async";
import HrRequestItem from "./HrRequestItem";


const AllRequests = () => {
    return (
        <div className="text-[#a8a7a7]">
            <Helmet>
                <title>All Requests</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl font-light uppercase mb-5 text-center">All Requests</h1>

            <div className=" mt-10 ">
                <div className="grid sm:grid-cols-2 md-lg:grid-cols-3 gap-5">
                    <HrRequestItem assetName={"Dell Laptop DS2023 Dell Laptop DS2023"} status={"pending"} category={"laptop"} requestDate={"13-05-24"} requesterName={"Ashiqur Rahman"} email={"357jafar@gmail.com"} />
                    <HrRequestItem assetName={"Dell Laptop DS2023 Dell Laptop DS2023"} status={"pending"} category={"laptop"} requestDate={"13-05-24"} requesterName={"Ashiqur Rahman"} email={"357jafar@gmail.com"} />
                    <HrRequestItem assetName={"Dell Laptop DS2023 Dell Laptop DS2023"} status={"pending"} category={"laptop"} requestDate={"13-05-24"} requesterName={"Ashiqur Rahman"} email={"357jafar@gmail.com"} />
                    <HrRequestItem assetName={"Dell Laptop DS2023 Dell Laptop DS2023"} status={"pending"} category={"laptop"} requestDate={"13-05-24"} requesterName={"Ashiqur Rahman"} email={"357jafar@gmail.com"} />
                    <HrRequestItem assetName={"Dell Laptop DS2023 Dell Laptop DS2023"} status={"pending"} category={"laptop"} requestDate={"13-05-24"} requesterName={"Ashiqur Rahman"} email={"357jafar@gmail.com"} />
                </div>
            </div>
        </div>
    );
};

export default AllRequests;