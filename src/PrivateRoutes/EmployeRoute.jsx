import { Navigate } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";


const EmployeRoute = ({ children }) => {

    const { employee, user, loading } = useAuthInfo()

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p><span className="loading loading-ring loading-lg"></span></p>
            </div>
        )
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    if (user && !employee) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p><span className="loading loading-ring loading-lg"></span></p>
            </div>
        )
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default EmployeRoute;