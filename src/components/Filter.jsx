import { useReducer, useRef, useState } from "react";
import { FaCross } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


const Filter = ({ setFilterModalOpen }) => {

    const filterFullDiv = useRef()
    const handleFilterClose = (e) => {
        if(filterFullDiv.current === e.target){
            setFilterModalOpen(false)
        }
    }

    return (
        <div ref={filterFullDiv} onClick={handleFilterClose} className="fixed top-0 flex items-center justify-center bg-[#00000049] left-0 z-50 backdrop-blur-sm w-full h-full">
            <div className="bg-[#0f172a] border relative rounded-md p-5 border-[#192747]">
                <button onClick={() => setFilterModalOpen(false)} className="absolute text-xl right-2 top-2"><RxCross2></RxCross2></button>
                <p className="font-raleway mb-5 text-center uppercase font-light">filter by</p>
                <form>
                    <div className="flex items-center justify-between gap-5">
                        <div>
                            <p className="text-sm uppercase font-raleway font-light">Approval Status</p>
                            <select className="bg-transparent cursor-pointer border rounded-sm p-1 border-[#192747] outline-none font-raleway mt-3" name="approvalStatus">
                                <option className="bg-[#0f172a]" disabled defaultChecked value="select">Select status</option>
                                <option className="bg-[#0f172a]" value="pending">Pending</option>
                                <option className="bg-[#0f172a]" value="approved">Approved</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-sm uppercase font-raleway font-light">Returnability</p>
                            <select className="bg-transparent cursor-pointer border rounded-sm p-1 border-[#192747] outline-none font-raleway mt-3" name="approvalStatus">
                                <option className="bg-[#0f172a]" disabled defaultChecked value="select">Select status</option>
                                <option className="bg-[#0f172a]" value="returnable">Returnable</option>
                                <option className="bg-[#0f172a]" value="nonReturnable">Non-returnable</option>
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

export default Filter;