

const LoginInput = ({ title, type, placeholder, InputClasses, value, name, required }) => {
    return (
        <div className="font-inter">
            <p className="mb-1 text-[#4b4b4b] font-semibold">{title}</p>
            <input className={`outline-none text-[#4b4b4b] bg-transparent font-raleway border border-[#e2e2e2] rounded-sm w-full px-3 py-2 ${InputClasses}`} placeholder={placeholder} value={value} type={type} required={required} name={name} />
        </div>
    );
};

export default LoginInput;