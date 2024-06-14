import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import Items from "./Items";
import { useEffect, useState } from "react";


const PendingRequest = () => {

    const axiosSecure = useAxiosSecure()
    const { employeeInfo, user } = useAuthInfo()
    const [pendingRequests, setPendingRequests] = useState([])

    useEffect(() => {
        axiosSecure.get(`/pending-requests/${employeeInfo.email}`)
            .then(res => {
                console.log(res.data)
                setPendingRequests(res.data)
            })
    }, [employeeInfo, axiosSecure, user])

    // const { data: pendingRequests = [] } = useQuery({
    //     queryKey: ['pendingRequests'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/pending-requests/${employeeInfo.email}`)
    //         return res.data
    //     },
    //     enabled: employeeInfo ? true : false
    // })

    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl text-[#a8a7a7] font-semibold font-raleway">My pending requests</h2>
            {pendingRequests?.length ?
                <div className="mt-5 border-t border-[#ffffff10]">
                    {
                        pendingRequests.map(requestItem => <Items key={requestItem._id} name={requestItem?.assetName} category={requestItem?.assetType} reqDate={requestItem?.requestedDate}></Items>)
                    }
                </div> :
                <p className="text-center mt-4 uppercase">You have no pending requests</p>
            }
        </div>
    );
};

export default PendingRequest;