import Filter from "../../../../components/Filter";
import Search from "../../../../components/Search";
import AssetItem from "./AssetItem";


const MyAsset = () => {
    return (
        <div className="min-h-screen pt-20 pb-5 bg-[#0f172a] text-white">
            <div className="lg:py-20 md:py-16 sm:pt-12 pt-8 max-w-[1320px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
                <div className="flex gap-5 items-center">
                    <Search></Search>
                    <Filter></Filter>
                </div>
                <div className="border mt-10 px-5 pt-7 pb-10 border-[#ffffff10] bg-[#ffffff03] rounded-md">
                    <div className="space-y-3">
                        <AssetItem name={"Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>
                        <AssetItem name={"Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>
                        <AssetItem name={"Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAsset;