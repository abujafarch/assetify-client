import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "./useAuthInfo";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const usePckgAndEmplyLmt = () => {
    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const [packageLimit, setPackageLimit] = useState(0)
    const [packagePlan, setPackagePlan] = useState('')
    const usingPackage = hrCompany?.package

    useEffect(() => {
        if(usingPackage === 5){
            setPackageLimit(5)
            setPackagePlan('Basic')
        }

        if(usingPackage === 8){
            setPackageLimit(10)
            setPackagePlan('Standard')
        }

        if(usingPackage === 15){
            setPackageLimit(20)
            setPackagePlan('Advance')
        }
    }, [usingPackage, hrCompany])

    const { data: addedEmployees, refetch: addedEmployeeRefetch } = useQuery({
        queryKey: ['employees'],
        enabled: hrCompany ? true : false,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-employees/${hrCompany._id}`)
            return res.data
        }
    })

    return [packageLimit, addedEmployees, packagePlan, addedEmployeeRefetch]
};

export default usePckgAndEmplyLmt;