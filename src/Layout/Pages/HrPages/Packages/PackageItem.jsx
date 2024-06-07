

const PackageItem = ({ employee, cost }) => {
    return (
        <div className="text-[#a8a7a7] w-full xs:w-max flex items-center flex-col bg-[#ffffff03] font-raleway border rounded-sm border-[#ffffff10] p-5">

            <h1 className="uppercase text-center font-poppins font-light">{employee} employee for ${cost}</h1>
            <button className="px-3 text-[#a8a7a7] mt-3 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">Buy package</button>
        </div>
    );
};

export default PackageItem;