

const PackageSection = () => {
    return (
        <div className="text-[#a8a7a7] flex sm:flex-row flex-col gap-5 justify-center sm:justify-between items-center bg-[#ffffff03] border rounded-sm border-[#ffffff10] p-5">
            <div className="uppercase font-raleway font-light">
                <h3 className="text-lg sm:text-left text-center">You are using <span className="border rounded-2xl py-[1px] px-2 bg-[#ffffff15] border-[#ffffff10]">basic</span> package</h3>
                <p className="text-sm sm:text-left text-center mt-3">You added <span className="border rounded-2xl py-[2px] px-2 bg-[#ffffff15] border-[#ffffff10]">3 employees</span></p>

                <p className="text-sm sm:text-left text-center mt-3">You cannot add more than <span className="border rounded-2xl py-[2px] px-2 bg-[#ffffff15] border-[#ffffff10]">5 employees</span></p>
            </div>
            <div>
            <button className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">Expand limit</button>
            </div>
        </div>
    );
};

export default PackageSection;