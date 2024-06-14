import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "./useAuthInfo";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const usePckgAndEmplyLmt = () => {
    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const [packageLimit, setPackageLimit] = useState('packageValue')
    const [packagePlan, setPackagePlan] = useState('')
    const usingPackage = hrCompany?.package

    useEffect(() => {
        if (usingPackage === 5) {
            setPackageLimit(5)
            setPackagePlan('Basic')
        }

        else if (usingPackage === 8) {
            setPackageLimit(10)
            setPackagePlan('Standard')
        }

        else if (usingPackage === 15) {
            setPackageLimit(20)
            setPackagePlan('Advance')
        }

        else {
            setPackageLimit(0)
        }
    }, [usingPackage, hrCompany])

    const { data: addedEmployees, isPending: employeeCountPending, refetch: addedEmployeeRefetch } = useQuery({
        queryKey: ['employees'],
        enabled: hrCompany ? true : false,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-employees/${hrCompany?._id}`)
            return res.data
        }
    })

    return [packageLimit, addedEmployees, packagePlan, addedEmployeeRefetch, employeeCountPending]
};

export default usePckgAndEmplyLmt;