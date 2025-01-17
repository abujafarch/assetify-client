

const HrPackageSelect = ({ required, name }) => {
    return (
        <div className="">
            <select name={name} required={required} className="outline-none font-raleway text-lg text-[#4b4b4b] w-full border rounded-sm py-2 px-3 border-[#e2e2e2]">
                <option value={5}>5 member for $5</option>
                <option value={8}>10 member for $8</option>
                <option value={15}>20 member for $15</option>
            </select>
        </div>
    );
};

export default HrPackageSelect;