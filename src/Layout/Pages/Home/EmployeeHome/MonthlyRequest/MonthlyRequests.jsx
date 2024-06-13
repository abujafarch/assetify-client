import { useQuery } from "@tanstack/react-query";
import Items from "../PendingRequest/Items";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../../hooks/useAuthInfo";


const MonthlyRequests = () => {

    const { employeeInfo } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const { data: monthlyRequests = [] } = useQuery({
        queryKey: ['monthlyRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/monthly-requests/${employeeInfo.email}`)
            return res.data
        },
        enabled: employeeInfo ? true : false
    })


    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl text-[#a8a7a7] font-semibold font-raleway">My monthly requests</h2>
            {monthlyRequests?.length ?
                <div className="mt-5 border-t border-[#ffffff10]">
                    {
                        monthlyRequests.map(request => <Items key={request._id} name={request?.assetName} category={request.assetType} reqDate={request.requestedDate}></Items>)
                    }
                </div> :
                <p className="text-center mt-4 uppercase">You have no any monthly requests</p>
            }
        </div>
    );
};

export default MonthlyRequests;