import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
// import RequestItem from "../EmployeesRequests/RequestItem";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import MostRequestedItem from "./MostRequestedItem";
import { useEffect, useState } from "react";


const MostRequested = () => {

    const axiosSecure = useAxiosSecure()
    const { hrCompany, user } = useAuthInfo()
    const [mostRequests, setMostRequests] = useState([])

    useEffect(() => {
        axiosSecure.get(`/most-requested/${hrCompany?._id}`)
            .then(res => {
                // console.log(res.data)
                setMostRequests(res.data)
            })
    }, [hrCompany, axiosSecure, user])

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