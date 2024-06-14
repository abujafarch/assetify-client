import { FaSearch } from "react-icons/fa";


const MyAssetSearch = ({ handleSearching }) => {

    const collectSearchWord = (e) => {
        e.preventDefault()
        const keyWord = e.target.keyWord.value
        handleSearching(keyWord)
        // console.log(keyWord)
    }

    return (
        <form onSubmit={collectSearchWord}>
            <div className="flex justify-between max-w-[400px] py-2 px-3 items-center rounded-sm border border-[#ffffff10] bg-[#ffffff03]">
                <input name='keyWord' placeholder="Search asset" className="font-raleway font-medium outline-none text-[#a8a7a7] w-full border bg-transparent border-none placeholder:text-[#353535]" type="text" />
                <button className="text-[#5c5c5c] p-1"><FaSearch></FaSearch></button>
            </div>
        </form>
    );
};

export default MyAssetSearch;