import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import LimitedItem from "./LimitedItem";
import { useEffect, useState } from "react";


const LimitedStock = () => {
    const { hrCompany, user } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const [limitedAssets, setLimitedAssets] = useState([])

    useEffect(() => {
        axiosSecure.get(`/limited-assets/${hrCompany?._id}`)
            .then(res => {
                // console.log(res.data)
                setLimitedAssets(res.data)
            })
    }, [hrCompany, axiosSecure, user])

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