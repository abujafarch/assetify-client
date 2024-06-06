import { FiFilter } from "react-icons/fi";
import Search from "../../../../components/Search";
import Filter from "../../../../components/Filter";
import HrAssetItem from "./HrAssetItem";


const Assets = () => {
    return (
        <div>
            <h1 className="font-raleway xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">Asset Lists</h1>
            <div className="flex gap-5 items-center">
                <Search></Search>

                <button className="flex border border-[#ffffff10] py-2 px-3 w-max rounded-sm items-center font-raleway  gap-2 text-[#5e5e5e] bg-[#ffffff03]">
                    <FiFilter></FiFilter>
                    <p>Filter</p>
                </button>

                {/* {filterModalOpen && <Filter
                    setFilterModalOpen={setFilterModalOpen}
                    selectTitle1={"Approval Status"}
                    selectTitle2={"Returnability"}
                    option1={"pending"}
                    option2={"approved"}
                    option3={"returnable"}
                    option4={"non-returnable"}
                >
                </Filter>} */}
            </div>
            <div className="border mt-10 px-3 sm:px-5 py-5 sm:py-7 border-[#ffffff10] bg-[#ffffff03] rounded-md">
                <div className="grid xs:grid-cols-2 md-lg:grid-cols-3 gap-5">
                    <HrAssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} quantity={"30"} category={"laptop"} addedDate={"13-05-24"} />
                    <HrAssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} quantity={"30"} category={"laptop"} addedDate={"13-05-24"} />
                    <HrAssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} quantity={"30"} category={"laptop"} addedDate={"13-05-24"} />
                    <HrAssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} quantity={"30"} category={"laptop"} addedDate={"13-05-24"} />
                    <HrAssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} quantity={"30"} category={"laptop"} addedDate={"13-05-24"} />
                    <HrAssetItem name={"Dell Laptop DS2023 Dell Laptop DS2023"} quantity={"30"} category={"laptop"} addedDate={"13-05-24"} />
                </div>
            </div>
        </div>
    );
};

export default Assets;