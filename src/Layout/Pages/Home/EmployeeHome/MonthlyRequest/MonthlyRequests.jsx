import Items from "../PendingRequest/Items";


const MonthlyRequests = () => {
    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl text-[#a8a7a7] font-semibold font-raleway">My monthly requests</h2>
            <div className="mt-5 border-t border-[#ffffff10]">
                <Items name={"HP Desktop HR2023"} category={"laptop"} reqDate={"10-03-24"}></Items>
                <Items name={"Canon Camera Cs60"} category={"camera"} reqDate={"12-05-24"}></Items>
                <Items name={"Dell Laptop DS2023"} category={"laptop"} reqDate={"12-05-24"}></Items>
            </div>
        </div>
    );
};

export default MonthlyRequests;