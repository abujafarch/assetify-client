import toast from "react-hot-toast";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const NotAffiliatedEmployee = ({ notHiredEmployee, setEmployees, employees, refetch, packageLimit, addedEmployees, addedEmployeeRefetch }) => {

    const { name, image, role, email } = notHiredEmployee
    const { hrCompany } = useAuthInfo()
    const axiosSecure = useAxiosSecure()

    const handleCheckBox = (e) => {
        // e.preventDefault()
        console.log(e.target.checked);
        if (e.target.checked) {
            const exists = employees.find(employeeEmail => employeeEmail === email)
            if (!exists) {
                setEmployees([...employees, email])
            }
        }
        if (!e.target.checked) {
            const remainingEmployees = employees.filter(employeeEmail => employeeEmail !== email)
            setEmployees(remainingEmployees)
        }

    }

    //user affiliating functionality
    const handleAffiliation = () => {

        if (!packageLimit) {
            return toast.error(`you have no package. please buy package`)
        }

        if (packageLimit === addedEmployees?.length) {
            return toast.error(`you can not add more than ${packageLimit} employees`)
        }

        axiosSecure.put(`/user-affiliation/${email}`, { companyId: hrCompany._id })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    addedEmployeeRefetch()
                    toast.success('employee added to you team')
                }
            })
    }


    return (
        <div className="flex bg-[#ffffff03] relative h-max flex-col items-center p-3 rounded-sm max-w-[155px] border border-[#192747]">
            <img className="rounded-sm w-24 h-24 object-cover" src={image} />
            <h1 className="font-raleway xs:text-base text-sm text-center mt-2 font-light text-[#ffffff7e]">{name}</h1>
            <span className="text-xs font-raleway text-[#a8a7a7] border border-[#ffffff1f] font-light rounded-xl px-2 py-[2px]">{role}</span>

            <button onClick={handleAffiliation} className="px-3 text-[#a8a7a7] mt-3 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">add to team</button>

            <input onClick={handleCheckBox} type="checkbox" className="bg-transparent cursor-pointer right-0 top-0 absolute w-5 h-5" />
        </div>
    );
};

export default NotAffiliatedEmployee;