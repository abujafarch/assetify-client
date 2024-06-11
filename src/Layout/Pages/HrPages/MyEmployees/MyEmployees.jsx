import { Helmet } from "react-helmet-async";
import EmployeeItem from "./EmployeeItem";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const MyEmployees = () => {

    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()
    const { data: employees = [] } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-employees/${hrCompany._id}`)
            return res.data
        }
    })

    return (
        <div className="text-[#a8a7a7]">
            <Helmet>
                <title>My Employees</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">my employees</h1>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {
                        employees.map(employee => <EmployeeItem key={employee._id} employee={employee}></EmployeeItem>)
                    }
                    {/* <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} /> */}
                </div>
            </div>
        </div>
    );
};

export default MyEmployees;