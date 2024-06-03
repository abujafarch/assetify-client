
import { NavLink } from 'react-router-dom';

const LiLinks = ({ to, title }) => {
    return (
        <li className='font-inter font-medium text-[#202020]'>
            <NavLink to={to}>{title}</NavLink>
        </li>
    );
};

export default LiLinks;