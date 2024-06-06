

const RequestItem = ({ name, category, reqDate }) => {
    return (
        <div className="text-[#a8a7a7] font-raleway border-b border-[#ffffff10] py-4">
            <h4 className="font-semibold">{name}</h4>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{category}</span>
            {reqDate && <span className="text-xs font-raleway border border-[#ffffff1f] font-light rounded-xl px-2 py-[2px]">requested date : {reqDate}</span>}
        </div>
    );
};

export default RequestItem;