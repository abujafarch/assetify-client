import { Navigate, useLocation } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";
import usePckgAndEmplyLmt from "../hooks/usePckgAndEmplyLmt";


const HrRoutes = ({ children }) => {

    const [packageLimit, addedEmployees, packagePlan, addedEmployeeRefetch, employeeCountPending] = usePckgAndEmplyLmt()

    const { hr, user, hrCompany, pendingState } = useAuthInfo()

    if (!user) {
        return <Navigate to='/login' ></Navigate>
    }

    if (!hrCompany || !hr) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p><span className="loading loading-ring loading-lg"></span></p>
            </div>
        )
    }

    if (!packageLimit) {
       return <Navigate to='/packages'></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default HrRoutes;