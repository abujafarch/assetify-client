
import { NavLink } from 'react-router-dom';
import useAuthInfo from '../../../../hooks/useAuthInfo';

const LiLinks = ({ to, title }) => {

    const {employee, hr } = useAuthInfo()
    return (
        <li className={`font-inter font-semibold ${employee || hr? 'lg:text-white text-green-600' : 'text-green-600'}`}>
            <NavLink to={to}>{title}</NavLink>
        </li>
    );
};

export default LiLinks;