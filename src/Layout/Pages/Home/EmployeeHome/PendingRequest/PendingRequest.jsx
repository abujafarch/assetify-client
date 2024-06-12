import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import Items from "./Items";


const PendingRequest = () => {

    const axiosSecure = useAxiosSecure()
    const { employeeInfo } = useAuthInfo()

    const { data: pendingRequests = [] } = useQuery({
        queryKey: ['pendingRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pending-requests/${employeeInfo.email}`)
            return res.data
        },
        enabled: employeeInfo ? true : false
    })

    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl text-[#a8a7a7] font-semibold font-raleway">My pending requests</h2>
            <div className="mt-5 border-t border-[#ffffff10]">
                {
                    pendingRequests.map(requestItem => <Items key={requestItem._id} name={requestItem?.assetName} category={requestItem?.assetType} reqDate={requestItem?.requestedDate}></Items>)
                }
            </div>
        </div>
    );
};

export default PendingRequest;