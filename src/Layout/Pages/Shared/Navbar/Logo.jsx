import useAuthInfo from "../../../../hooks/useAuthInfo";

const Logo = () => {

    const { employee, hr, hrCompany, employeeInfo } = useAuthInfo()

    if (employee && employeeInfo.hired) {
        return (
            <>
                <div className="sm:w-10 w-8 h-8 sm:h-10"><img className='w-full h-full rounded-full object-cover' src={employeeInfo?.companyLogo} /></div>
                <h2 className={`font-inter w-max text-xl sm:text-2xl font-extrabold text-white`}>{employeeInfo?.companyName}</h2>
            </>
        );
    }

    if (hr) {
        return (
            <>
                <div className="sm:w-10 w-8 h-8 sm:h-10"><img className='w-full h-full rounded-full object-cover' src={hrCompany?.companyLogo} /></div>
                <h2 className={`font-inter w-max text-xl sm:text-2xl font-extrabold text-white`}>{hrCompany?.companyName}</h2>
            </>
        );
    }

    return (
        <>
            <div className="sm:w-10 w-8 h-8 sm:h-10"><img className='w-full h-full rounded-full object-cover' src='https://i.ibb.co/ck1nYbn/assetify-tr.png' /></div>
            <h2 className={`font-inter w-max text-xl sm:text-2xl font-extrabold text-green-600`}>Assetify</h2>
        </>
    );
};

export default Logo;