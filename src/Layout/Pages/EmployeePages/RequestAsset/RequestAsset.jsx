import { FiFilter } from "react-icons/fi";
import Filter from "../../../../components/Filter";
import Search from "../../../../components/Search";
import ReqItem from "./ReqItem";
import { useState } from "react";
import RequestModal from "./RequestModal";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const RequestAsset = () => {

    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const [requestModalOpen, setRequestModalOpen] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { employeeInfo } = useAuthInfo()
    // console.log(employeeInfo.companyId);

    const { data: myCompanyAssets = [] } = useQuery({
        queryKey: ['myCompanyAssets'],
        queryFn: async () => {
            const res = await axiosSecure.get(`myCompany-assets/${employeeInfo.companyId}`)
            return res.data
        },
        enabled: employeeInfo ? true : false
    })

    const [requestedItem, setRequestedItem] = useState()
    // console.log(myCompanyAssets)

    if (!employeeInfo.hired) {
        return <div>
            <p className="text-center uppercase font-raleway text-[#8f8f8f]">You are not connected with any company. Please contact with you HR manger</p>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>My Request</title>
            </Helmet>
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

            {myCompanyAssets?.length ?
                <div className="grid xl:grid-cols-4 mt-5 lg:grid-cols-3 xs:grid-cols-2 gap-5">
                    {
                        myCompanyAssets.map(asset => <ReqItem key={asset._id} setRequestedItem={setRequestedItem} requestModalOpen={requestModalOpen} setRequestModalOpen={setRequestModalOpen} asset={asset}></ReqItem>)
                    }
                </div> :
                <p className="text-center mt-4 uppercase">Your HR do not added any asset.</p>
            }

            {requestModalOpen && <RequestModal requestedItem={requestedItem} setRequestModalOpen={setRequestModalOpen} ></RequestModal>}

        </div>
    );
};

export default RequestAsset;