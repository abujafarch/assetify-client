import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAuthInfo = () => {
    return useContext(AuthContext)
};

export default useAuthInfo;