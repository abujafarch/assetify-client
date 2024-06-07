import LoginInput from "./LoginInput";


const Login = () => {
    return (
        <div className="px-3 sm:px-6 md:px-8 sm:pt-14 lg:py-52 md:py-20 lg:px-10">
            <h2 className="font-raleway uppercase text-center text-xl xs:text-2xl">login</h2>
            <div className="pb-5 space-y-6 max-w-[600px] mx-auto pt-3">
                <form className="space-y-6">
                    <LoginInput title={"Email"} type={"email"} placeholder={"type your email"} />
                    <LoginInput title={"Password"} type={"password"} placeholder={"type your password"} />
                </form>
                <p className="font-raleway uppercase text-center py-">or</p>
                <button className="w-full border border-[#e2e2e2] py-2 px-3 uppercase font-raleway">Google login</button>
            </div>

        </div>
    );
};

export default Login;