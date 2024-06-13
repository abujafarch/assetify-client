
import useAuthInfo from "../../../../hooks/useAuthInfo";


const ReqItem = ({ asset, setRequestedItem, setRequestModalOpen }) => {

    const { assetName, assetType, quantity } = asset
    const { employeeInfo } = useAuthInfo()

    const assetInfoCollect = () => {

        const requestedItem = {
            assetName: asset.assetName,
            assetType: asset.assetType,
            assetId: asset._id,
            returnability: asset.returnability,
            requesterName: employeeInfo.name,
            requesterEmail: employeeInfo.email,
            companyId: employeeInfo.companyId,
            requestedDate: new Date().toLocaleDateString('en-GB'),
            createdAt: new Date(),
            status: 'pending'
        }
        setRequestedItem(requestedItem)
        setRequestModalOpen(true)

    }

    return (
        <div className="text-[#a8a7a7] bg-[#ffffff03] font-raleway border border-[#ffffff10] p-3">
            <h4 className="font-semibold">{assetName}</h4>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{assetType}</span>
            <span className="text-xs border border-[#ffffff1f] mr-1 font-light rounded-xl px-2 py-[2px]">{quantity ? 'available' : 'out of stock'}</span>

            <div className="mt-3">
                <button
                    disabled={!quantity}
                    onClick={assetInfoCollect}
                    className={`${!quantity ? 'cursor-not-allowed' : ''} font-raleway px-3 py-[6px] text-sm font-light border border-[#192747] uppercase`}>request</button>
            </div>
        </div>
    );
};

export default ReqItem;