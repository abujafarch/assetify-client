

const Logo = ({imgLink, title}) => {
    return (
        <>
            <div className="w-10 h-10"><img className='w-full h-full object-cover' src={imgLink} /></div>
            <h2 className='font-inter text-2xl font-semibold'>{title}</h2>
        </>
    );
};

export default Logo;