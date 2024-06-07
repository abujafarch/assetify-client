import React from 'react';
import { Helmet } from 'react-helmet-async';

const SharedProfile = () => {
    return (
        <div className='flex flex-col items-center'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h1 className="font-raleway mt-3 xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">My Profile</h1>
            <div className='text-[#a8a7a7] w-full xs:w-max flex items-center flex-col bg-[#ffffff03] font-raleway border rounded-sm border-[#ffffff10] p-5'>
                <img className='w-24 h-24 rounded-sm mb-7' src="https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg" />
                <h3 className='uppercase mb-2 text-center'>Abujafar Chhaleh Nameem</h3>
                <h3 className='text-center'>Email: 357jafar@gmail.com</h3>
                <button className="px-3 text-[#a8a7a7] mt-3 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">update</button>
            </div>
        </div>
    );
};

export default SharedProfile;