
import { NavLink } from 'react-router-dom';
import { useEmployee, useHR } from '../../../../hooks/useEmployee';
import useUserStatus from '../../../../hooks/useUserStatus';

const LiLinks = ({ to, title }) => {

    const [employee, hr] = useUserStatus()
    return (
        <li className={`font-inter font-semibold ${employee || hr? 'lg:text-white text-green-600' : 'text-green-600'}`}>
            <NavLink to={to}>{title}</NavLink>
        </li>
    );
};

export default LiLinks;