import { Link } from "react-router-dom";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const PackageSection = ({ packageLimit, addedEmployees, packagePlan }) => {

    const { hrCompany } = useAuthInfo()
    
    if (!packageLimit) {
        return (
            <div className="flex flex-col items-center space-y-3 px-3">
                <p className="font-raleway uppercase font-light text-center">You have no package.</p>
                <Link to='/packages'>
                    <button className="uppercase border border-[#464646] px-2 py-1" >buy package</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="text-[#a8a7a7] flex sm:flex-row flex-col gap-5 justify-center sm:justify-between items-center bg-[#ffffff03] border rounded-sm border-[#ffffff10] p-5">
            {packageLimit ?
                <div className="uppercase font-raleway font-light">
                    <h3 className="text-lg sm:text-left text-center">You are using <span className="border rounded-2xl py-[1px] px-2 bg-[#ffffff15] border-[#ffffff10]">{packagePlan}</span> package</h3>

                    <p className="text-sm sm:text-left text-center mt-3">You added <span className="border rounded-2xl py-[2px] px-2 bg-[#ffffff15] border-[#ffffff10]">{addedEmployees?.length} employees</span></p>

                    <p className="text-sm sm:text-left text-center mt-3">You cannot add more than <span className="border rounded-2xl py-[2px] px-2 bg-[#ffffff15] border-[#ffffff10]">{packageLimit} employees</span></p>
                </div> :
                <p className="uppercase font-raleway font-light">you are not purchased any package</p>}
            <div>
                <Link to='/packages'><button className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">Expand limit</button></Link>
            </div>
        </div>
    );
};

export default PackageSection;