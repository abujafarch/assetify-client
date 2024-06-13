import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import RequestItem from "../EmployeesRequests/RequestItem";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import MostRequestedItem from "./MostRequestedItem";


const MostRequested = () => {

    const axiosSecure = useAxiosSecure()
    const { hrCompany } = useAuthInfo()

    const { data: mostRequests = [] } = useQuery({
        queryKey: ['most-requests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/most-requested/${hrCompany._id}`)
            // console.log(res.data);
            return res.data
        }
    })

    return (
        <div>
            <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
                <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">most requested</h2>
                <div className="mt-5 border-t border-[#ffffff10]">
                    {
                        mostRequests.map(request => <MostRequestedItem key={request.assetId} request={request} name={"Dell Laptop DS2023"} category={"laptop"} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default MostRequested;