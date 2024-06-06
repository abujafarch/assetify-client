
import RequestModal from "./RequestModal";


const ReqItem = ({ name, type, available, requestModalOpen, setRequestModalOpen }) => {

    
    return (
        <div className="text-[#a8a7a7] bg-[#ffffff03] font-raleway border border-[#ffffff10] p-3">
            <h4 className="font-semibold">{name}</h4>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{type}</span>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{available}</span>

            <div className="mt-3">
                <button onClick={() => setRequestModalOpen(true)} className="font-raleway px-3 py-[6px] text-sm font-light border border-[#192747] uppercase">request</button>
            </div>

            {requestModalOpen && <RequestModal setRequestModalOpen={setRequestModalOpen}></RequestModal>}
        </div>
    );
};

export default ReqItem;