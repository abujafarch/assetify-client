

const NotAffiliatedEmployee = ({ name, image, role, employees, setEmployees }) => {
    const handleCheckBox = (e) => {
        // e.preventDefault()
        console.log(e.target.checked);
        if (e.target.checked) {
            console.log("i am on checking");
            setEmployees([...employees, { name }])
        }
        
    }
    // console.log(employees);

    return (
        <div className="flex bg-[#ffffff03] h-max flex-col items-center p-3 rounded-sm max-w-[155px] border border-[#192747]">
            <img className="rounded-sm w-24 h-24 object-cover" src={image} />
            <h1 className="font-raleway xs:text-base text-sm text-center mt-2 font-light text-[#ffffff7e]">{name}</h1>
            <span className="text-xs font-raleway text-[#a8a7a7] border border-[#ffffff1f] font-light rounded-xl px-2 py-[2px]">{role}</span>
            <button className="px-3 text-[#a8a7a7] mt-3 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">add to team</button>
            <input onClick={handleCheckBox} type="checkbox" className="checkbox" />
        </div>
    );
};

export default NotAffiliatedEmployee;