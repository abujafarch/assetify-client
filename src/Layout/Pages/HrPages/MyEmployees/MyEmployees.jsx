import { Helmet } from "react-helmet-async";
import EmployeeItem from "./EmployeeItem";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import { Link } from "react-router-dom";


const MyEmployees = () => {

    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        enabled: hrCompany ? true : false,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-employees/${hrCompany._id}`)
            return res.data
        },
        // enabled: hrCompany ? true : false
    })

    if (employees?.length === 0) {
        return (
            <div className="flex flex-col items-center space-y-3 px-3">
                <p className="font-raleway uppercase font-light text-center">You have no employee to your team.</p>
                <Link to='/add-employee'>
                    <button className="uppercase border border-[#464646] px-2 py-1" >add employee</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="text-[#a8a7a7]">
            <Helmet>
                <title>My Employees</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">my employees</h1>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {
                        employees.map(employee => <EmployeeItem key={employee._id} employee={employee} refetch={refetch}></EmployeeItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyEmployees;