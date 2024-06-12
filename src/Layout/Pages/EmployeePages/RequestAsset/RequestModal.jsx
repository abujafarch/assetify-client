import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const RequestModal = ({ setRequestModalOpen, asset }) => {

    const { employeeInfo } = useAuthInfo()
    const requestModalDiv = useRef()
    const axiosSecure = useAxiosSecure()

    const handleRequestModalClose = (e) => {
        if (requestModalDiv.current === e.target) {
            setRequestModalOpen(false)
        }
        // console.log(requestModalDiv.current, e.target);
    }

    const handleRequestAsset = (e) => {
        e.preventDefault()
        const form = e.target
        const note = form.note.value
        const requestedItem = {
            assetName: asset.assetName,
            assetType: asset.assetType,
            assetId: asset._id,
            requesterName: employeeInfo.name,
            requesterEmail: employeeInfo.email,
            companyId: employeeInfo.companyId,
            requestedDate: new Date().toLocaleDateString('en-GB'),
            additionalNote: note,
            status: 'pending'
        }
        axiosSecure.post('asset-request', requestedItem)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    setRequestModalOpen(false)
                    toast.success('requested to you HR manager')
                }
                else {
                    toast.error('something is wrong please try again')
                }
            })
    }

    return (
        <div ref={requestModalDiv} onClick={handleRequestModalClose} className="fixed top-0 flex items-center justify-center bg-[#0000001f] left-0 z-50 backdrop-blur-sm w-full h-full">
            <div className="bg-[#0f172a] border relative rounded-md p-3 xs:p-5 border-[#192747]">
                <button onClick={() => setRequestModalOpen(false)} className="absolute text-xl right-2 top-2"><RxCross2></RxCross2></button>
                <p className="font-raleway mt-2 mb-5 text-center uppercase font-light">additional note</p>
                <form onSubmit={handleRequestAsset}>
                    <textarea required className="bg-transparent w-[250px] xs:w-[400px] sm:w-[460px] h-[200px] p-3 outline-none border rounded-sm border-[#192747] font-raleway placeholder:text-[#353535] text-[#a8a7a7]" placeholder="Write your additional note" name="note"></textarea>

                    <div className="mt-5 flex items-center justify-center">
                        <button className="font-raleway px-3 py-[6px] text-sm font-light border border-[#192747] uppercase">request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestModal;