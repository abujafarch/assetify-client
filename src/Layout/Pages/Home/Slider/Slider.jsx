import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules';
import SlideText from "./SlideText";


const Slider = () => {
    return (
        <div className='relative'>
            <Swiper
                navigation={{
                    nextEl: '.slide-next',
                    prevEl: '.slide-prev',
                    clickable: true
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                className='relative mySwiper h-[550px] lg:min-h-screen md:h-[870px]'
            >
                <SwiperSlide>
                    <div className='w-full h-full z-30'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/mSpTtLs/Improving-the-Office-365-app-experience-in-virtual-environments-SOCIAL.png" />

                        <SlideText tag={"ADD, MANAGE, GROW"} title={"Your Best Partner to Recall Assets"} para={"Step into Efficiency, where you can manage your all returnable and not returnable assets easily. Dive into productivity and make growth your businesses"} btn={"Join as HR Manager"}></SlideText>

                        <div className='w-full h-full z-10 absolute top-0 bg-[#0000009d]'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/Lz6Xbrt/successfulbusinessteamwi-88818.jpg" />
                        <SlideText tag={"GET, USE, RETURN"} title={"Get any Assets you needed"} para={"You can get any asset from your office you needed. You can also return asset via this application. Join today as an Employee to access asset from office"} btn={"Join as Employee"}></SlideText>
                        <div className='w-full h-full z-10 absolute top-0 bg-[#0000009d]'></div>
                    </div>
                </SwiperSlide>


                <div className="absolute hidden sm:block z-30 left-0 top-1/2 -translate-y-1/2 text-[#ffffff50] text-6xl slide-prev cursor-pointer"><MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft></div>

                <div className="absolute sm:block hidden z-30 right-0 top-1/2 -translate-y-1/2 text-[#ffffff50] text-6xl slide-next cursor-pointer"><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></div>

                {/* bottom-5 left-1/2 -translate-x-1/2 */}
                
            </Swiper>
        </div>
    );
};

export default Slider;