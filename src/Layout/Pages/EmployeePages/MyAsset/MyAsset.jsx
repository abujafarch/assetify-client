import { useState } from "react";
import Filter from "../../../../components/Filter";
import Search from "../../../../components/Search";
import AssetItem from "./AssetItem";
import { FiFilter } from "react-icons/fi";


const MyAsset = () => {
    const [filterModalOpen, setFilterModalOpen] = useState(false)
    return (
        <div>
            <div className="flex gap-5 items-center">
                <Search></Search>

                <button onClick={() => setFilterModalOpen(true)} className="flex border border-[#ffffff10] py-2 px-3 rounded-sm items-center font-raleway  gap-2 text-[#5e5e5e] bg-[#ffffff03]">
                    <FiFilter></FiFilter>
                    <p>Filter</p>
                </button>

                {filterModalOpen && <Filter setFilterModalOpen={setFilterModalOpen}></Filter>}
            </div>
            <div className="border mt-10 px-3 sm:px-5 py-5 sm:py-7 border-[#ffffff10] bg-[#ffffff03] rounded-md">
                <div className="space-y-3">
                    <AssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>
                    <AssetItem name={"Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>
                    <AssetItem name={"Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>
                </div>
            </div>
        </div>
    );
};

export default MyAsset;