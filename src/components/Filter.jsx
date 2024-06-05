import { FiFilter } from "react-icons/fi";


const Filter = () => {
    return (
        <div>
            <button className="flex border border-[#ffffff10] py-2 px-3 rounded-sm items-center font-raleway  gap-2 text-[#5e5e5e] bg-[#ffffff03]">
                <FiFilter></FiFilter>
                <p>Filter</p>
            </button>
            <div className="absolute bottom-1/2 left-1/2">
                Hello I am here are filter
            </div>
        </div>
    );
};

export default Filter;