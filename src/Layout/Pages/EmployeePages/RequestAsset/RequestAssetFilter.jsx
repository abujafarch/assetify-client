import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";


const RequestAssetFilter = ({ setFilterModalOpen, selectTitle1, selectTitle2, option1, option2, option3, option4, handleRequestAssetsFilter }) => {


    const filterFullDiv = useRef()
    const handleFilterClose = (e) => {
        if (filterFullDiv.current === e.target) {
            setFilterModalOpen(false)
        }
    }

    const handleCollectingFilterValue = (e) => {
        e.preventDefault()
        const form = e.target
        const availability = form.availability.value
        const returnability = form.returnability.value
        handleRequestAssetsFilter(availability, returnability)
        console.log(availability, returnability);
    }



    return (
        <div ref={filterFullDiv} onClick={handleFilterClose} className="fixed top-0 flex items-center justify-center bg-[#00000049] text-[#adadad] left-0 z-50 backdrop-blur-sm w-full h-full">
            <div className="bg-[#0f172a] border relative rounded-md py-5 px-3 xs:p-5 border-[#192747]">
                <button onClick={() => setFilterModalOpen(false)} className="absolute text-xl right-2 top-2"><RxCross2></RxCross2></button>
                <p className="font-raleway mb-5 text-center uppercase font-light">filter by</p>
                <form onSubmit={handleCollectingFilterValue}>
                    <div className="flex items-center justify-between gap-2 xs:gap-5">
                        <div>
                            <p className="text-sm uppercase font-raleway font-light">{selectTitle1}</p>
                            <select defaultValue="select" className="bg-transparent cursor-pointer border rounded-sm p-1 border-[#192747] text-sm xs:text-base outline-none font-raleway mt-3" name="availability">
                                <option className="bg-[#0f172a]" disabled defaultChecked >select</option>
                                <option className="bg-[#0f172a]" value={option1}>{option1}</option>
                                <option className="bg-[#0f172a]" value={option2}>{option2}</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-sm uppercase font-raleway font-light">{selectTitle2}</p>
                            <select defaultValue="select" className="bg-transparent cursor-pointer border rounded-sm p-1 border-[#192747] xs:text-base text-sm outline-none font-raleway mt-3" name="returnability">
                                <option className="bg-[#0f172a]" defaultChecked disabled value="select" >select</option>
                                <option className="bg-[#0f172a]" value={option3}>{option3}</option>
                                <option className="bg-[#0f172a]" value={option4}>{option4}</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-5">
                        <button className="font-raleway px-3 py-[6px] text-sm font-light border border-[#192747] uppercase">filter</button>
                        <p onClick={() => setFilterModalOpen(false)} className="font-raleway w-max cursor-pointer px-3 py-[6px] text-sm font-light border border-[#192747] uppercase">cancel</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestAssetFilter;