

const MaxAssetUser = ({ image, name, quantity }) => {
    return (
        <div className="text-[#a8a7a7] flex gap-5 items-start font-raleway border-b border-[#ffffff10] py-4">
            <img className="w-14 h-14 object-cover rounded-sm" src={image} />
            <div>
                <h4 className="font">{name}</h4>
                <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">using {quantity} assets</span>
            </div>
        </div>
    );
};

export default MaxAssetUser;