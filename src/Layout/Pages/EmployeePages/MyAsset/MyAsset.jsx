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

    const { refetch: myAssetRefetch } = useQuery({
        queryKey: ['myAssets'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-assets/${employeeInfo.email}`)
            setMyAssets(res.data)
            return "myAssets"
        },
        enabled: employeeInfo.hired ? true : false
    })

    // console.log(myAssets);

    const [filterModalOpen, setFilterModalOpen] = useState(false)

    if (!employeeInfo.hired) {
        return <div>
            <p className="text-center uppercase font-raleway text-[#8f8f8f]">You are not connected with any company. Please contact with you HR manger</p>
        </div>
    }

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
                {myAssets?.length ?
                    <div className="space-y-3">
                        {
                            myAssets.map(myAsset => <AssetItem key={myAsset._id} myAsset={myAsset} myAssetRefetch={myAssetRefetch} ></AssetItem>)
                        }

                    </div> :
                    <p className="text-center uppercase">You have no requested or approved asset </p>
                }
            </div>
        </div>
    );
};

export default MyAsset;