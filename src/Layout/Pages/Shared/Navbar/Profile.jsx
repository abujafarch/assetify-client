import { useState } from "react";
import LiLinks from "./LiLinks";


const Profile = ({ to }) => {

    const [showProfile, setShowProfile] = useState(false)

    return (
        <div className="cursor-pointer relative">
            <div
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
                className="w-9 h-9">

                <img className="w-full h-full rounded-full object-cover" src="https://i.ibb.co/kJ6yX3b/assetify.png" />
            </div>

            <div
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
                className={`bg-transparent absolute right-0 pt-2 cursor-pointer ${showProfile ? 'block' : 'hidden'}`}>

                <div className="bg-base-100 custom-shadow p-3 rounded-md space-y-3 w-max">
                    <p className="font-inter font-medium">Abujafar Chhaleh</p>
                    <LiLinks to={to} title={"Profile"}></LiLinks>
                    <button className='text-white bg-red-600 font-inter font-medium py-2 px-3 rounded-md'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;