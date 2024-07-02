import React, { useEffect, useState } from 'react';
import LiLinks from './LiLinks';
import Profile from './Profile';
import Logo from './Logo';
import { RiMenuLine } from 'react-icons/ri';
import useAuthInfo from '../../../../hooks/useAuthInfo';

const Navbar = () => {

    const { employee, hr } = useAuthInfo()
    const employeeOrHr = employee || hr
    // console.log(employeeOrHr);

    const [scrollY, setScrollY] = useState(0)

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY
        if (scrollY < 70) {
            setScrollY(scrollY)
        }
    })

    const navLinks = <>

        <LiLinks to={"/"} title={"Home"}></LiLinks>
        {
            (!employee && !hr) && <>
                <LiLinks to={"/employee-register"} title={"Join as Employee"}></LiLinks>
                <LiLinks to={"/hr-register"} title={"Join as HR Manager"}></LiLinks>
                <LiLinks to={"/login"} title={"Login"}></LiLinks>
            </>
        }

        {
            employee && <>
                <LiLinks to={"/my-assets"} title={"My Asset"}></LiLinks>
                <LiLinks to={"/my-team"} title={"My Team"}></LiLinks>
                <LiLinks to={"/request-asset"} title={"Request for an Asset"}></LiLinks>
            </>
        }

        {
            hr && <>
                <LiLinks to={"/assets"} title={"Assets"}></LiLinks>
                <LiLinks to={"/add-asset"} title={"Add Asset"}></LiLinks>
                <LiLinks to={"/all-requests"} title={"All Request"}></LiLinks>
                {/* <LiLinks to={"/custom-request"} title={"Custom Requests"}></LiLinks> */}
                <LiLinks to={"/employee-lists"} title={"My Employees"}></LiLinks>
                <LiLinks to={"/add-employee"} title={"Add Employee"}></LiLinks>
            </>
        }
    </>

    return (
        <div className={`  w-full py-2 ${scrollY < 20 ? 'bg-[#2b2a2a31] border-0' : !employeeOrHr && 'bg-white border-b border-[#f0f0f0]'} ${employeeOrHr && 'bg-[#0f172a] border-b border-[#f0f0f00a]'} transition-all duration-200 ease-in-out`}>
            <div className='px-2 sm:px-5 flex gap-5 items-center'>
                <div className="navbar justify-between">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" lg:hidden mr-5">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                                <p className='text-2xl text-[#616161] w-max'><RiMenuLine></RiMenuLine></p>
                            </div>
                            <div tabIndex={0} className='list-none space-y-2 dropdown-content mt-3 z-[1] bg-base-100 w-52 custom-shadow rounded-md p-5'>
                                {navLinks}
                            </div>
                        </div>

                        <div className="cursor-pointer flex items-center gap-3 ">
                            <Logo></Logo>
                        </div>
                    </div>

                    <div className="navbar-center hidden lg:flex list-none gap-4">
                        {navLinks}
                    </div>
                </div>
                <div className='list-none'>
                    {(hr || employee) && < Profile to={`${hr ? '/hr-profile' : '/employee-profile'}`} />}
                </div>
            </div>
        </div >
    );
};

export default Navbar;