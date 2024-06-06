

const HrRequestItem = ({assetName, status, category, note, email, requesterName, requestDate }) => {
    return (
        <div className="text-[#a8a7a7]  font-raleway w-full border rounded-sm px-2 border-[#ffffff10] py-4">
            <div className="w-full">
                <h4 className="font-semibold">{assetName}</h4>
                <span className="text-xs h-max w-max border border-[#ffffff1f] px-2 py-[2px] mr-1 font-extralight rounded-xl">{category}</span>

                <span className="text-xs h-max w-max mr-1 font-raleway border border-[#ffffff1f] px-2 py-[2px] font-extralight rounded-xl">{status}</span>
            </div>
            <div className=" font-inter font-light text-xs mt-3"> 
                <p>Name: {requesterName}</p>

                <p className="mt-2">Email: <span className="lowercase">{email}</span></p>

                <p className="mt-2">Request date: <span className="lowercase">{requestDate}</span></p>
                
                <p className="mt-3">Note: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis. Rem ducimus, sed necessitatibus sunt accusantium inventore dolore non sit?</span></p>
            </div>

            <div className="space-x-4 text-sm w-full flex mt-5">
                <button className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">approve</button>
                <button className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">reject</button>
            </div>
        </div>
    );
};

export default HrRequestItem;