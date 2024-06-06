

const HrAssetItem = ({ name, quantity, category, addedDate }) => {
    return (
        <div className="text-[#a8a7a7] bg-[#ffffff03] font-raleway w-full border rounded-sm px-2 border-[#ffffff10] py-4">
            <div className="w-full">
                <h4 className="font-semibold">{name}</h4>
                <span className="text-xs h-max w-max border border-[#ffffff1f] px-2 py-[2px] mr-1 font-extralight rounded-xl">{category}</span>

                <span className="text-xs h-max w-max mr-1 font-raleway border border-[#ffffff1f] px-2 py-[2px] font-extralight rounded-xl">quantity: {quantity}</span>

                <p className="text-xs h-max w-max mt-2 font-raleway border border-[#ffffff1f] px-2 py-[2px] font-extralight rounded-xl">added date: {addedDate}</p>
            </div>

            <div className="space-x-4 w-full flex mt-5">
                <button className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">update</button>
                <button className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">delete</button>
            </div>
        </div>
    );
};

export default HrAssetItem;