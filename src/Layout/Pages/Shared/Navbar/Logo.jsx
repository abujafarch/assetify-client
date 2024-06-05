import useUserStatus from "../../../../hooks/useUserStatus";


const Logo = ({ imgLink, title }) => {

    const [employee, hr] = useUserStatus()

    return (
        <>
            <div className="sm:w-10 w-8 h-8 sm:h-10"><img className='w-full h-full object-cover' src={imgLink} /></div>
            <h2 className={`font-inter w-max text-xl sm:text-2xl font-extrabold ${employee || hr ? 'text-white' : 'text-green-600'}`}>{title}</h2>
        </>
    );
};

export default Logo;