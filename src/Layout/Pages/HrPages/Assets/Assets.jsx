import { FiFilter } from "react-icons/fi";
import Search from "../../../../components/Search";
import Filter from "../../../../components/Filter";
import HrAssetItem from "./HrAssetItem";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import toast from "react-hot-toast";


const Assets = () => {
    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const { hrCompany } = useAuthInfo()

    const axiosSecure = useAxiosSecure()
    const { data: assets = [], refetch } = useQuery({
        queryKey: ['assets'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets/${hrCompany._id}`)
            return res.data
        }
    })

    const handleDeleteAsset = (id) => {
        axiosSecure.delete(`/asset/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    toast.success('asset deleted')
                }
                refetch()
            })
    }

    return (
        <div>
            <Helmet>
                <title>All Assets Lists</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">Asset Lists</h1>
            <div className="flex gap-5 items-center">
                <Search></Search>

                <button onClick={() => setFilterModalOpen(true)} className="flex border border-[#ffffff10] py-2 px-3 w-max rounded-sm items-center font-raleway  gap-2 text-[#5e5e5e] bg-[#ffffff03]">
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

            <div className="mt-5">
                <p className="font-raleway text-[#a8a7a7] uppercase text-sm mb-2">sort by quantity</p>
                <select className="bg-[#0f172a] uppercase py-[9px] px-2 cursor-pointer border rounded-sm p-1 border-[#192747] text-[#a8a7a7] text-sm xs:text-base outline-none font-raleway">
                    <option className="text-sm" value="default">default</option>
                    <option className="text-sm" value="high to low">high to low</option>
                    <option className="text-sm" value="low to high">low to high</option>
                </select>
            </div>

            <div className="mt-10">
                <div className="grid xs:grid-cols-2 md-lg:grid-cols-3 gap-5">
                    {
                        assets.map(asset => <HrAssetItem key={asset._id} name={asset.assetName} quantity={asset.quantity} category={asset.assetType} addedDate={asset.addedDate} handleDeleteAsset={handleDeleteAsset} id={asset._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Assets;