import { Outlet } from 'react-router-dom';
import '../App.css'
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="">
            <div className='fixed w-full bg-white'><Navbar /></div>
            <div className='pt-20'><Outlet></Outlet></div>
            <Footer />
        </div>
    );
};

export default Main;