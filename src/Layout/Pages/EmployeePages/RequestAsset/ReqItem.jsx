
import RequestModal from "./RequestModal";


const ReqItem = ({ asset, requestModalOpen, setRequestModalOpen }) => {

    const { assetName, assetType, quantity } = asset
    return (
        <div className="text-[#a8a7a7] bg-[#ffffff03] font-raleway border border-[#ffffff10] p-3">
            <h4 className="font-semibold">{assetName}</h4>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{assetType}</span>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{quantity ? 'available' : 'out of stock'}</span>

            <div className="mt-3">
                <button disabled={!quantity} onClick={() => setRequestModalOpen(true)} className={`${!quantity ? 'cursor-not-allowed' : ''} font-raleway px-3 py-[6px] text-sm font-light border border-[#192747] uppercase`}>request</button>
            </div>

            {requestModalOpen && <RequestModal setRequestModalOpen={setRequestModalOpen}></RequestModal>}
        </div>
    );
};

export default ReqItem;