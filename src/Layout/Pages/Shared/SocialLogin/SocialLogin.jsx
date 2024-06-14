import { useNavigate } from "react-router-dom";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const { googleLogin, setEmployee } = useAuthInfo()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log('google login result', result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    role: 'employee',
                    hired: false,
                    image: result.user?.photoURL
                }
                axiosPublic.post('/google-users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.userAlreadyExist) {
                            // setEmployee(true)
                            navigate('/')
                            toast.success('logged in successfully')
                        }
                        if (res.data.insertedId) {
                            setEmployee(true)
                            navigate('/')
                            toast.success('logged in successfully')
                        }
                    })

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="">
            <p className="font-raleway uppercase text-center">or</p>
            <button onClick={handleGoogleLogin} className="w-full mt-3 border border-[#e2e2e2] py-2 px-3 uppercase font-raleway">Google login</button>
        </div>
    );
};

export default SocialLogin;