import { Helmet } from "react-helmet-async";
import HrRequestItem from "./HrRequestItem";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import { useQuery } from "@tanstack/react-query";

const AllRequests = () => {

    const axiosSecure = useAxiosSecure()
    const { hrCompany } = useAuthInfo()

    const { data: allRequests = [], refetch: allRequestRefetch } = useQuery({
        queryKey: ['all-requests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`all-requests/${hrCompany._id}`)
            // console.log(res.data)
            return res.data
        },
        enabled: hrCompany ? true : false
    })

    // if (requests?.length === 0) {
    //     return (
    //         <div className="flex flex-col items-center space-y-3 px-3">
    //             <p className="font-raleway uppercase font-light text-center">You have no asset request.</p>
    //         </div>
    //     )
    // }

    return (
        <div className="text-[#a8a7a7]">
            <Helmet>
                <title>All Requests</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl font-light uppercase mb-5 text-center">All Requests</h1>

            <div className=" mt-10 ">
                <div className="grid sm:grid-cols-2 md-lg:grid-cols-3 gap-5">
                    {
                        allRequests.map(request => <HrRequestItem key={request._id} request={request} allRequestRefetch={allRequestRefetch} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRequests;