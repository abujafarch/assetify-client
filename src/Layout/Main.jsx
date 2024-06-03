import { Outlet } from 'react-router-dom';
import '../App.css'
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="">
            <div className='fixed w-full z-50'><Navbar /></div>
            <div className=''><Outlet></Outlet></div>
            <Footer />
        </div>
    );
};

export default Main;