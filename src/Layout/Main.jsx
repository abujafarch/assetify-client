import { Outlet } from 'react-router-dom';
import '../App.css'
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import useUserStatus from '../hooks/useUserStatus';

const Main = () => {
    const [employee, hr] = useUserStatus()
    return (
        <div className="">
            <div className='fixed w-full z-40'><Navbar /></div>

            {
                (!employee && !hr) && <div><Outlet></Outlet></div>
            }

            {
                (employee || hr) &&
                <div className={`bg-[#0f172a] min-h-screen pt-20 pb-5`}>
                    <div className='lg:py-28 md:py-20 sm:pt-14 pt-8 max-w-[1320px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 text-white'>
                        <Outlet></Outlet>
                    </div>
                </div>
            }

            <div className=''>
                {(employee || hr) && <hr className="border-none h-[2px] bg-[#2b3440]" />}
                <Footer />
            </div>
        </div>
    );
};

export default Main;