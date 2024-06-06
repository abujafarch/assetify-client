import RequestItem from "../EmployeesRequests/RequestItem";


const MostRequested = () => {
    return (
        <div>
            <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
                <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">most requested</h2>
                <div className="mt-5 border-t border-[#ffffff10]">
                    <RequestItem name={"Dell Laptop DS2023"} category={"laptop"}></RequestItem>
                    <RequestItem name={"Dell Laptop DS2023"} category={"laptop"}></RequestItem>
                    <RequestItem name={"Dell Laptop DS2023"} category={"laptop"}></RequestItem>
                    <RequestItem name={"Dell Laptop DS2023"} category={"laptop"}></RequestItem>
                </div>
            </div>
        </div>
    );
};

export default MostRequested;