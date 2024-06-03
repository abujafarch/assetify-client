

const About = () => {
    return (
        <div className="lg:mt-20 md:mt-16 font-inter sm:mt-10 mt-8 max-w-[1320px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-center text-3xl md:text-4xl font-Inter font-bold">ABOUT US</h2>

            <p className="text-center text-base sm:text-lg text-[#868686] font-medium max-w-[800px] mx-auto sm:mt-8 mt-5">At Assetify, we specialize in providing a comprehensive asset management solution tailored for businesses of all sizes. Our platform is designed to streamline the tracking and management of your company's assets, ensuring efficiency, accountability, and transparency.</p>
            <div className="mt-7 sm:mt-16 flex sm:flex-row flex-col gap-5 items-start">
                <img className="sm:w-[47%] w-full sm:h-[350px]  object-cover" src="https://i.ibb.co/CB51Vp3/pexels-photo-7666429.jpg" />
                <div className="z-10 bg-white pb-5">
                    <p className="text-xl md:text-2xl font-semibold mb-2">OUR MISSION</p>
                    <p className="text-base lg:text-lg text-[#868686] font-medium">Our mission is to empower businesses to manage their assets with ease and precision. We aim to reduce the administrative burden on HR managers and other stakeholders, allowing them to focus on what truly matters – growing their business and supporting their employees..</p>
                </div>
            </div>
            <div className=" flex flex-col-reverse sm:flex-row gap-5 sm:items-end sm:-mt-44 mt-5">
                <div className="bg-white sm:py-5 pl-0">
                    <p className="text-xl md:text-2xl font-semibold mb-2">OUR VISION</p>
                    <p className="text-base lg:text-lg text-[#868686] font-medium">We envision a world where businesses can manage their assets effortlessly, with complete visibility and control. We strive to be the leading asset management solution provider, recognized for our innovation, reliability, and exceptional customer service.</p>
                </div>
                <img className="sm:w-[47%] w-full sm:h-[350px] object-cover" src="https://i.ibb.co/9cJYwms/pexels-photo-276259.jpg" />
            </div>
        </div>
    );
};

export default About;