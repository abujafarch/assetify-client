import { Outlet } from 'react-router-dom';
import '../App.css'
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import useUserStatus from '../hooks/useUserStatus';

const Main = () => {
    const [employee, hr] = useUserStatus()
    return (
        <div className="">
            <div className='fixed w-full z-50'><Navbar /></div>

            <div className=''><Outlet></Outlet></div>

            <div className=''>
                {(employee || hr) && <hr className="border-none h-[2px] bg-[#2b3440]" />}
                <Footer />
            </div>
        </div>
    );
};

export default Main;