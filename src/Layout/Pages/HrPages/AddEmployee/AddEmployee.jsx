import { useState } from "react";
import NotAffiliatedEmployee from "./NotAffiliatedEmployee";
import PackageSection from "./PackageSection";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const AddEmployee = () => {

    const { hrCompany } = useAuthInfo()
    const [employees, setEmployees] = useState([])
    console.log(employees);
    const axiosSecure = useAxiosSecure()

    const { data: notHiredEmployees = [], refetch } = useQuery({
        queryKey: ['not-hired-employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('/not-hired-employees')
            return res.data
        }
    })

    const handleSelectedItemAdd = () => {
        console.log("i am working")
        axiosSecure.put(`/add-employees`, { employees, companyId: hrCompany._id })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Add Employees</title>
            </Helmet>
            <PackageSection></PackageSection>

            <h1 className="font-raleway mt-14 xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">add employee</h1>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {
                        notHiredEmployees.map(notHiredEmployee => <NotAffiliatedEmployee
                            key={notHiredEmployee._id}
                            employees={employees}
                            setEmployees={setEmployees}
                            notHiredEmployee={notHiredEmployee}
                            refetch={refetch} />)
                    }
                </div>

                <button onClick={handleSelectedItemAdd} disabled={!employees.length} className={`px-3 ${employees.length === 0 && 'cursor-not-allowed'} text-[#a8a7a7] mt-10 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]`}>add selected employees</button>
            </div>
        </div>
    );
};

export default AddEmployee;