import { VscDebugBreakpointLog } from "react-icons/vsc";
import Bullets from "./Bullets";

const OurPackages = () => {
    return (
        <div className="lg:mt-20 md:mt-16 font-inter sm:mt-10 mt-8 max-w-[1320px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-center text-3xl md:text-4xl font-Inter font-bold">OUR PACKAGES</h2>
            <div className="mt-7 md:mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="w-full bg-[] rounded-b-md custom-shadow">
                    <div className="font-raleway text-white p-5 bg-green-600 text-center rounded-t-md">
                        <h2 className=" font-bold text-2xl">Basic</h2>
                        <p className="text-xl font-inter font-semibold">$5/<span className="text-sm">month</span></p>
                    </div>
                    <div className="space-y-2 p-5">
                        <Bullets text={"Includes: Up to 5 employees"}></Bullets>
                        <Bullets text={"Comprehensive tracking for both returnable and non-returnable assets"} />
                        <Bullets text={"Real-time monitoring of asset usage"} />
                        <Bullets text={"User-friendly interface"} />
                        <Bullets text={"Basic reporting capabilities"} />
                    </div>
                </div>

                <div className="w-full bg-[] rounded-b-md custom-shadow">
                    <div className="font-raleway text-white p-5 bg-green-600 text-center rounded-t-md">
                        <h2 className=" font-bold text-2xl">Standard</h2>
                        <p className="text-xl font-inter font-semibold">$8/<span className="text-sm">month</span></p>
                    </div>
                    <div className="space-y-2 p-5">
                        <Bullets text={"Up to 10 employees"} />
                        <Bullets text={"All features included in the Basic Package"} />
                        <Bullets text={"Advanced reporting capabilities"} />
                        <Bullets text={"Email support"} />
                        <Bullets text={"Customizable asset categories"} />
                        <Bullets text={"Integration with select third-party tools"} />
                    </div>
                </div>

                <div className="w-full bg-[] rounded-b-md custom-shadow">
                    <div className="font-raleway text-white p-5 bg-green-600 text-center rounded-t-md">
                        <h2 className=" font-bold text-2xl">Advance</h2>
                        <p className="text-xl font-inter font-semibold">$15/<span className="text-sm">month</span></p>
                    </div>
                    <div className="space-y-2 p-5">
                        <Bullets text={"Up to 20 employees"} />
                        <Bullets text={"All features included in the Standard Package"} />
                        <Bullets text={"Priority customer support"} />
                        <Bullets text={"Detailed analytics and insights"} />
                        <Bullets text={"Full integration with third-party tools and systems"} />
                        <Bullets text={"Customizable dashboards and reports"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPackages;