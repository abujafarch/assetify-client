import useAuthInfo from "../../../../hooks/useAuthInfo";

const Logo = () => {

    const { employee, hr, hrCompany } = useAuthInfo()

    return (
        <>
            <div className="sm:w-10 w-8 h-8 sm:h-10"><img className='w-full h-full rounded-full object-cover' src={hrCompany?.companyLogo || 'https://i.ibb.co/ck1nYbn/assetify-tr.png'} /></div>
            <h2 className={`font-inter w-max text-xl sm:text-2xl font-extrabold ${employee || hr ? 'text-white' : 'text-green-600'}`}>{hrCompany?.companyName || "Assetify"}</h2>
        </>
    );
};

export default Logo;