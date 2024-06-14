import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import MaxAssetUser from "./MaxAssetUser";
import { useEffect, useState } from "react";


const MaxAssetsUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { hrCompany, user } = useAuthInfo()

    const [maxAssetsUsers, setMaxAssetsUsers] = useState([])

    useEffect(() => {
        axiosSecure.get(`/max-asset-users/${hrCompany?._id}`)
            .then(res => {
                // console.log(res.data)
                setMaxAssetsUsers(res.data)
            })
    }, [hrCompany, axiosSecure, user])

    return (
        <div>
            <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
                <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">max assets users</h2>
                <div className="mt-5 border-t border-[#ffffff10]">
                    {
                        maxAssetsUsers.map((maxAssetUser, index) => <MaxAssetUser key={index} maxAssetUser={maxAssetUser} ></MaxAssetUser>)
                    }

                </div>
            </div>
        </div>
    );
};

export default MaxAssetsUsers;