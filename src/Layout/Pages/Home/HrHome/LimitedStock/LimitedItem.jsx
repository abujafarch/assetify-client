

const LimitedItem = ({ limitedAsset }) => {
    return (
        <div className="text-[#a8a7a7] font-raleway border-b border-[#ffffff10] py-4">
            <h4 className="font-semibold">{limitedAsset?.assetName}</h4>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{limitedAsset?.assetType}</span>
            <span className="text-xs font-raleway border border-[#ffffff1f] font-light rounded-xl px-2 py-[2px]">quantity : {limitedAsset?.quantity}</span>
        </div>
    );
};

export default LimitedItem;