import { FiFilter } from "react-icons/fi";
import Filter from "../../../../components/Filter";
import Search from "../../../../components/Search";
import ReqItem from "./ReqItem";
import { useState } from "react";
import RequestModal from "./RequestModal";


const RequestAsset = () => {

    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const [requestModalOpen, setRequestModalOpen] = useState(false)

    return (
        <div>
            <div className="flex gap-5 items-center">
                <Search></Search>
                <button onClick={() => setFilterModalOpen(true)} className="flex w-max border border-[#ffffff10] py-2 px-3 rounded-sm items-center font-raleway  gap-2 text-[#5e5e5e] bg-[#ffffff03]">
                    <FiFilter></FiFilter>
                    <p>Filter</p>
                </button>

                {filterModalOpen && <Filter
                    setFilterModalOpen={setFilterModalOpen}
                    selectTitle1={"Availability"}
                    selectTitle2={"Returnability"}
                    option1={"available"}
                    option2={"out of stock"}
                    option3={"returnable"}
                    option4={"non-returnable"}
                >
                </Filter>}
            </div>

            <div className="grid xl:grid-cols-4 mt-5 lg:grid-cols-3 xs:grid-cols-2 gap-5">
                <ReqItem requestModalOpen={requestModalOpen} setRequestModalOpen={setRequestModalOpen} name={"Samsung S24 Ultra"} type={"Returnable"} available={"Available"}></ReqItem>

                <ReqItem requestModalOpen={requestModalOpen} setRequestModalOpen={setRequestModalOpen} name={"Samsung S24 Ultra Samsung S24 Ultra"} type={"Non-returnable"} available={"Out of stock"}></ReqItem>

                <ReqItem requestModalOpen={requestModalOpen} setRequestModalOpen={setRequestModalOpen} name={"Samsung S24 Ultra Samsung S24 Ultra"} type={"Non-returnable"} available={"Out of stock"}></ReqItem>

                <ReqItem requestModalOpen={requestModalOpen} setRequestModalOpen={setRequestModalOpen} name={"Samsung S24 Ultra Samsung S24 Ultra"} type={"Non-returnable"} available={"Out of stock"}></ReqItem>

                <ReqItem requestModalOpen={requestModalOpen} setRequestModalOpen={setRequestModalOpen} name={"Samsung S24 Ultra Samsung S24 Ultra"} type={"Non-returnable"} available={"Out of stock"}></ReqItem>
            </div>
        </div>
    );
};

export default RequestAsset;