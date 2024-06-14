import { Helmet } from "react-helmet-async";
import LoginInput from "./LoginInput";
import useAuthInfo from "../../../hooks/useAuthInfo";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import toast from "react-hot-toast";


const Login = () => {
    const { login, setLoading } = useAuthInfo()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then(() => {
                console.log("logged in success")
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                toast.error("something is wrong, try again")
                setLoading(false)
            })
    }

    return (
        <div className="px-3 sm:px-6 md:px-8 sm:pt-14 lg:py-52 md:py-20 lg:px-10">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h2 className="font-raleway uppercase text-center text-xl xs:text-2xl">login</h2>
            <div className="pb-5 space-y-6 max-w-[600px] mx-auto pt-3">
                <form onSubmit={handleLogin} className="space-y-6">
                    <LoginInput name="email" title={"Email"} type={"email"} placeholder={"type your email"} />
                    <LoginInput name="password" title={"Password"} type={"password"} placeholder={"type your password"} />
                    <LoginInput type={"submit"} InputClasses={"cursor-pointer"} value={"Login"} />
                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;