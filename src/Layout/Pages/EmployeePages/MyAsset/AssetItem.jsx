

const AssetItem = ({ name, category, reqDate, approvalDate, reqStatus, Action }) => {

    const pending = false

    return (
        <div className="text-[#a8a7a7] grid xs:grid-cols-2 gap-5 md:grid-cols-3 font-raleway border rounded-sm px-2 border-[#ffffff10] py-4">
            <div className="w-full">
                <h4 className="font-semibold">{name}</h4>
                <span className="text-xs border border-[#ffffff1f] px-2 py-[2px] mr-1 font-extralight rounded-xl">{category}</span>

                <span className="text-xs font-raleway border border-[#ffffff1f] px-2 py-[2px] font-extralight rounded-xl">{reqStatus}</span>
            </div>
            <div className="text-sm w-full space-y-1 font-extralight font-open-sans">
                <p>requested date: {reqDate}</p>
                <p>approval date: {approvalDate}</p>
            </div>

            <div className="space-x-4 w-full flex md:justify-end items-center">
                {pending ?
                    <button className="px-5 text-sm py-[6px] rounded-sm border border-[#ffffff1f]">Cancel</button> :
                    <>
                        <button className="px-5 text-sm py-[6px] rounded-sm border border-[#ffffff1f]">Print</button>
                        <button className="px-5 text-sm py-[6px] rounded-sm border border-[#ffffff1f]">Return</button>
                    </>
                }
            </div>
        </div>
    );
};

export default AssetItem;