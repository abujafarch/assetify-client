import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import LimitedItem from "./LimitedItem";


const LimitedStock = () => {
    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()
    const { data: limitedAssets = [] } = useQuery({
        queryKey: ['limitedAssets'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/limited-assets/${hrCompany._id}`)
            // console.log(res.data)
            return res.data
        }
    })
    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">limited items</h2>
            <div className="mt-5 border-t border-[#ffffff10]">
                {
                    limitedAssets.map(limitedAsset => <LimitedItem key={limitedAsset._id} name={"Dell Laptop DS2023"} category={"laptop"} quantity={"4"} limitedAsset={limitedAsset} />)
                }
            </div>
        </div>
    );
};

export default LimitedStock;