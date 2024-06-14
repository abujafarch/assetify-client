import { Navigate } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";


const PackageRouter = ({ children }) => {
    
    const { hr, user } = useAuthInfo()

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    else if (user && !hr) {
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

export default PackageRouter;