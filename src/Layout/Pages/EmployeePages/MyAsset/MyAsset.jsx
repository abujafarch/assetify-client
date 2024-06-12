import { useState } from "react";
import Filter from "../../../../components/Filter";
import Search from "../../../../components/Search";
import AssetItem from "./AssetItem";
import { FiFilter } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const MyAsset = () => {

    const [myAssets, setMyAssets] = useState([])
    const axiosSecure = useAxiosSecure()
    const { employeeInfo } = useAuthInfo()

    const { data } = useQuery({
        queryKey: ['myAssets'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-assets/${employeeInfo.email}`)
            setMyAssets(res.data)
            return "myAssets"
        },
        enabled: employeeInfo ? true : false
    })

    // console.log(myAssets);

    const [filterModalOpen, setFilterModalOpen] = useState(false)
    return (
        <div>
            <Helmet>
                <title>My Assets</title>
            </Helmet>
            <div className="flex gap-5 items-center">
                <Search></Search>

                <button onClick={() => setFilterModalOpen(true)} className="flex border border-[#ffffff10] py-2 px-3 w-max rounded-sm items-center font-raleway  gap-2 text-[#5e5e5e] bg-[#ffffff03]">
                    <FiFilter></FiFilter>
                    <p>Filter</p>
                </button>

                {filterModalOpen && <Filter
                    setFilterModalOpen={setFilterModalOpen}
                    selectTitle1={"Approval Status"}
                    selectTitle2={"Returnability"}
                    option1={"pending"}
                    option2={"approved"}
                    option3={"returnable"}
                    option4={"non-returnable"}
                >
                </Filter>}
            </div>
            <div className="border mt-10 px-3 sm:px-5 py-5 sm:py-7 border-[#ffffff10] bg-[#ffffff03] rounded-md">
                <div className="space-y-3">
                    {
                        myAssets.map(myAsset => <AssetItem key={myAsset._id} myAsset={myAsset} name={"Dell Laptop DS2023 Dell Laptop DS2023"} reqDate={"12-05-24"} category={"laptop"} approvalDate={"13-05-24"} reqStatus={"Approved"} ></AssetItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default MyAsset;