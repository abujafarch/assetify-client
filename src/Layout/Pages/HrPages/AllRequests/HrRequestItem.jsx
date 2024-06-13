import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const HrRequestItem = ({ allRequestRefetch, request }) => {

    const axiosSecure = useAxiosSecure()

    const handleApprove = async () => {
        const res = await axiosSecure.put(`/approve-asset/${request?.assetId}`)
        if (res.data.modifiedCount > 0) {
            toast.success('asset approved')
            allRequestRefetch()
        }
        else if (res.data.quantity === 0) {
            toast.error('you have no asset of this category')
        }
    }
    const handleReject = async () => {
        const res = await axiosSecure.delete(`/reject-asset/${request?.assetId}`)
        if (res.data.deletedCount > 0) {
            toast.success('asset rejected')
            allRequestRefetch()
        }
    }


    return (
        <div className="text-[#a8a7a7]  font-raleway w-full border rounded-sm px-2 border-[#ffffff10] py-4">
            <div className="w-full">
                <h4 className="font-semibold">{request?.assetName}</h4>
                <span className="text-xs h-max w-max border border-[#ffffff1f] px-2 py-[2px] mr-1 font-extralight rounded-xl">{request?.assetType}</span>

                <span className="text-xs h-max w-max mr-1 font-raleway border border-[#ffffff1f] px-2 py-[2px] font-extralight rounded-xl">{request?.status}</span>
            </div>
            <div className=" font-inter font-light text-xs mt-3">
                <p>Name: {request?.requesterName}</p>

                <p className="mt-2">Email: <span className="lowercase">{request?.requesterEmail}</span></p>

                <p className="mt-2">Request date: <span className="lowercase">{request?.requestedDate}</span></p>

                <p className="mt-3">Note: <span>{request?.additionalNote}</span></p>
            </div>

            <div className="space-x-4 text-sm w-full flex mt-5">
                <button onClick={handleApprove} className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">approve</button>

                <button onClick={handleReject} className="px-5 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">reject</button>
            </div>
        </div>
    );
};

export default HrRequestItem;