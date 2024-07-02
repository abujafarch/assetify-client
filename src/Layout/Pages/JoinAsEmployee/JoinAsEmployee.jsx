import { Helmet } from "react-helmet-async";
import InputFeild from "./InputFeild";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import toast from "react-hot-toast";

//image uploader api link and api key here
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const JoinAsEmployee = () => {

    const { createUser, profileUpdate, setEmployee } = useAuthInfo()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleCreateUser = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const birthDate = form.birthDate.value
        const imageFile = { image: form.photo.files[0] }
        const hired = false
        console.log({ name, email, password, birthDate, imageFile });

        //password check here
        if (password.length < 6) {
            return alert('You have to use minimum 6 character in password')
        }

        //image upload here
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        //if upload successful then create user
        if (res.data.success) {
            const image = res.data.data.display_url
            console.log(image)
            createUser(email, password)
                .then(() => {
                    console.log('user created')

                    //make user to database
                    const user = { name, email, birthDate, hired, image: image, role: 'employee' }
                    axiosPublic.post('/users', user)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                setEmployee(true)
                                navigate('/')
                                toast.success('registration successful')
                            }
                        })

                    //updating profile here
                    profileUpdate(name, image)
                        .then(() => {
                            console.log('Profile Updated')
                            navigate('/')
                        })
                        .catch(err => console.log(err))

                })
                .catch(err => {
                    toast.error('maybe this email already exist or internet error. please try again')
                    console.log(err)
                })

            //make user to database here
            // 
        }
    }



    return (
        <div className="px-3 sm:px-6 md:px-8 sm:pt-14 lg:py-52 py-32 lg:px-10">
            <Helmet>
                <title>Join as Employee</title>
            </Helmet>
            <h2 className="font-raleway uppercase text-center text-xl xs:text-2xl">Sign Up as employee</h2>
            <div className="pb-5 space-y-6 max-w-[600px] mx-auto pt-3">
                <form onSubmit={handleCreateUser} className="space-y-6">

                    <InputFeild required={true} name="name" title={"Full name"} type={"text"} placeholder={"type your full name"}></InputFeild>

                    <InputFeild required={true} name="email" title={"Email"} type={"email"} placeholder={"type your email"}></InputFeild>

                    <InputFeild required={true} name="password" title={"Password"} type={"password"} placeholder={"type your password"}></InputFeild>

                    <InputFeild required={true} name="photo" InputClasses={"file-input file-input-bordered w-full max-w-xs"} title={"Your photo"} type={"file"}></InputFeild>

                    <InputFeild required={true} name="birthDate" title={"Date of Birth"} type={"date"}></InputFeild>

                    <InputFeild type={"submit"} value={"Sign up"} InputClasses={"cursor-pointer uppercase"}></InputFeild>

                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default JoinAsEmployee;