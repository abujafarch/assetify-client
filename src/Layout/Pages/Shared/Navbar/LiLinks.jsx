
import { NavLink } from 'react-router-dom';

const LiLinks = ({ to, title }) => {
    return (
        <li className='font-inter font-semibold text-[#141414]'>
            <NavLink to={to}>{title}</NavLink>
        </li>
    );
};

export default LiLinks;