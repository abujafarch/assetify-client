import { Link } from "react-router-dom";


const SlideText = ({tag, title, para, btn, to}) => {
    return (
        <div className="absolute flex max-w-[900px] mx-auto flex-col items-center w-full z-20 text-center top-[53%] sm:top-[50%] -translate-x-1/2 -translate-y-1/2 left-1/2 px-5 ">
            <div className='max-w-[900px] sm:mb-8 mb-2'>
                <p className="sm:text-lg text-sm tracking-widest font-inter text-[#36ad68] font-semibold">{tag}</p>
                <h1 className="sm:text-6xl sm:leading-[70px] text-3xl leading-[40px] h-max bg-clip-text text-[#2eb375b4] font-bold font-wisdom font-inter">{title}</h1>
            </div>
            <div className='max-w-[700px] sm:px-6'>
                <p className="font-inter text-[#b6b6b6] font-medium text-sm sm:text-lg">{para}</p>
            </div>
            <Link to={to}><button className='hover:bg-light-blue z-50 transition duration-300 ease-in-out px-4 py-2 rounded-[30px] sm:mt-10 mt-6 font-semibold text-lg text-[#36ad68]  border-[3px] hover:bg-[#42424267] border-[#36ad68] cursor-pointer'>{btn}</button></Link>
        </div>
    );
};

export default SlideText;