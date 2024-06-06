

const TeamMember = ({image, name, role}) => {
    return (
        <div className="flex h-max flex-col items-center p-3 rounded-sm max-w-[155px] border border-[#192747]">
            <img className="rounded-sm w-24 h-24 object-cover" src={image} />
            <h1 className="font-raleway xs:text-base text-sm text-center mt-1 font-light text-[#ffffff7e]">{name}</h1>
            <span className="text-xs font-raleway text-[#a8a7a7] border border-[#ffffff1f] font-light rounded-xl px-2 py-[2px]">{role}</span>
        </div>
    );
};

export default TeamMember;