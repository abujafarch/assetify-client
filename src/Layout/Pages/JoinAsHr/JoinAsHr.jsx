import HrInputField from "./HrInputField";
import HrPackageSelect from "./HrPackageSelect";


const JoinAsHr = () => {
    return (
        <div className="px-3 sm:px-6 md:px-8 sm:pt-14 lg:py-52 md:py-20 lg:px-10">
            <h2 className="font-raleway uppercase text-center text-xl xs:text-2xl">Sign Up as HR</h2>
            <div className="pb-5 space-y-6 max-w-[600px] mx-auto pt-3">
                <form className="space-y-6">
                    <HrInputField title={"Full name"} type={"text"} placeholder={"type your full name"} />
                    <HrInputField title={"Company name"} type={"text"} placeholder={"type your company name"} />
                    <HrInputField title={"Company logo"} InputClasses={"file-input file-input-bordered w-full max-w-xs"} type={"file"} />
                    <HrInputField title={"Email"} type={"email"} placeholder={"type your email"}/>
                    <HrInputField title={"Password"} type={"password"} placeholder={"type your password"} />
                    <HrInputField title={"Date of Birth"} type={"date"} />

                    <HrPackageSelect></HrPackageSelect>

                    <HrInputField type={"submit"} value={"Sign up"} InputClasses={"cursor-pointer uppercase"} />                    
                </form>
            </div>

        </div>
    );
};

export default JoinAsHr;