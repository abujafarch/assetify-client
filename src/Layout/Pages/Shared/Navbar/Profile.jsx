import { useState } from "react";
import LiLinks from "./LiLinks";
// "../../../../hooks/useUserStatus";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const Profile = ({ to }) => {

    const { logOut, employee, hr } = useAuthInfo()
    const [showProfile, setShowProfile] = useState(false)
    const { user } = useAuthInfo()

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("logged out success");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="cursor-pointer relative">
            <div
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
                className="w-9 h-9">

                <img className="w-full h-full rounded-full object-cover" src={user?.photoURL} />
            </div>

            <div
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
                className={`bg-transparent absolute right-0 pt-2 cursor-pointer ${showProfile ? 'block' : 'hidden'}`}>

                <div className={`${(employee || hr) ? 'bg-[#15213b]' : 'bg-base-100'} custom-shadow p-3 rounded-md space-y-3 w-max`}>
                    <p className={`font-inter font-medium ${(employee || hr) && 'text-white'} `}>{user?.displayName}</p>
                    <LiLinks to={to} title={"Profile"}></LiLinks>
                    <button onClick={handleLogout} className='text-white bg-red-600 font-inter font-medium py-2 px-3 rounded-md'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;