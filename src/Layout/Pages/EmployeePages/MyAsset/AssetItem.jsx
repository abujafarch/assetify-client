import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const AssetItem = ({ myAsset, myAssetRefetch }) => {

    const axiosSecure = useAxiosSecure()
    // const pending = false
    const handleCancelingRequest = async () => {
        const res = await axiosSecure.delete(`/requested-item/${myAsset?._id}`)
        if (res.data.deletedCount > 0) {
            toast.success('request canceled')
            myAssetRefetch()
        }
        else {
            toast.error('something is wrong please try again')
        }
    }

    const handleReturnAsset = async () => {
        console.log("i am hitting on return");
        const res = await axiosSecure.put(`/return-asset?requestId=${myAsset?._id}&assetId=${myAsset?.assetId}`)

        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            toast.success('asset returned')
            myAssetRefetch()
        }
    }

    return (
        <div className="text-[#a8a7a7] grid xs:grid-cols-2 gap-5 md:grid-cols-3 font-raleway border rounded-sm px-2 border-[#ffffff10] py-4">
            <div className="w-full">
                <h4 className="font-semibold">{myAsset?.assetName}</h4>
                <span className="text-xs border border-[#ffffff1f] px-2 py-[2px] mr-1 font-extralight rounded-xl">{myAsset?.assetType}</span>

                <span className="text-xs font-raleway border border-[#ffffff1f] px-2 py-[2px] font-extralight rounded-xl">{myAsset?.status}</span>
            </div>
            <div className="text-sm w-full space-y-1 font-extralight font-open-sans">
                <p>requested date: {myAsset?.requestedDate}</p>
                <p>approval date: {myAsset?.approveDate}</p>
            </div>

            <div className="space-x-4 w-full flex md:justify-end items-center">
                {myAsset?.status === 'pending' ?
                    <button onClick={handleCancelingRequest} className="px-5 text-sm py-[6px] rounded-sm border border-[#ffffff1f]">Cancel</button> :
                    <>
                        <Link to='/print-assetDetails' state={myAsset}>
                            <button className="px-5 text-sm py-[6px] rounded-sm border border-[#ffffff1f]">Print</button>
                        </Link>

                        {myAsset?.returnability === 'returnable' &&
                            <button
                                onClick={handleReturnAsset}
                                className={`px-5 text-sm py-[6px] rounded-sm border border-[#ffffff1f] ${myAsset?.status === 'returned' && 'cursor-not-allowed'}`}
                            >
                                {myAsset?.status === 'returned' ? 'returned' : 'Return'}
                            </button>}
                    </>
                }
            </div>
        </div>
    );
};

export default AssetItem;