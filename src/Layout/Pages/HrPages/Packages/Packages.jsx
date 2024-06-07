import { Helmet } from "react-helmet-async";
import PackageItem from "./PackageItem";


const Packages = () => {
    return (
        <div>
            <Helmet>
                <title>Packages</title>
            </Helmet>
            <h1 className="font-raleway mt-3 xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">All packages</h1>
            <div className="flex items-center justify-center">
                <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5">
                    <PackageItem employee={5} cost={5}></PackageItem>
                    <PackageItem employee={10} cost={8}></PackageItem>
                    <PackageItem employee={20} cost={15}></PackageItem>
                </div>
            </div>
        </div>
    );
};

export default Packages;