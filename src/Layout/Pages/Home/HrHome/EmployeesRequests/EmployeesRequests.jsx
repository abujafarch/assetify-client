import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import RequestItem from "./RequestItem";


const EmployeesRequests = () => {

    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const { data: usersRequests = [] } = useQuery({
        queryKey: ['usersRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users-requests/${hrCompany._id}`)
            // console.log(res.data)
            return res.data
        },
        enabled: hrCompany ? true : false
    })

    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">Pending requests</h2>
            <div className="mt-5 border-t border-[#ffffff10]">
                {
                    usersRequests.map(userRequest => <RequestItem key={userRequest._id} userRequest={userRequest}></RequestItem>)
                }
            </div>
        </div>
    );
};

export default EmployeesRequests;