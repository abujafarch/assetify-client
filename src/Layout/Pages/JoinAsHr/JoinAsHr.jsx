import { Helmet } from "react-helmet-async";
import HrInputField from "./HrInputField";
import HrPackageSelect from "./HrPackageSelect";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const JoinAsHr = () => {

    const { createUser, profileUpdate, setHr } = useAuthInfo()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleCreateUser = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const companyName = form.companyName.value
        const email = form.email.value
        const password = form.password.value
        const birthDate = form.birthDate.value
        const purchasingPackage = parseInt(form.purchasingPackage.value)
        const imageFile = { image: form.photo.files[0] }
        console.log({ name, companyName, email, password, birthDate, imageFile, purchasingPackage });


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
                    // console.log('user created')
                    //make user to database
                    const user = { name, email, birthDate, image: image, companyName, role: 'hr' }
                    axiosPublic.post('/hr-users', user)
                        .then(res => {
                            console.log(res.data)
                            setHr(true)
                            navigate('/payments', { state: { purchasingPackage } })
                            toast.success('registration successful')
                        })

                    //updating profile here
                    profileUpdate(name, image)
                        .then(() => {
                            console.log('Profile Updated')
                        })
                        .catch(err => console.log(err))

                })
                .catch(err => {
                    toast.error('maybe this email already exist or internet error. please try again')
                    console.log(err)
                })
        }
    }


    return (
        <div className="px-3 sm:px-6 md:px-8 sm:pt-14 lg:py-52 md:py-20 lg:px-10">
            <Helmet>
                <title>Join as HR Manager</title>
            </Helmet>
            <h2 className="font-raleway uppercase text-center text-xl xs:text-2xl">Sign Up as HR</h2>
            <div className="pb-5 space-y-6 max-w-[600px] mx-auto pt-3">
                <form onSubmit={handleCreateUser} className="space-y-6">
                    <HrInputField required={true} name={"name"} title={"Full name"} type={"text"} placeholder={"type your full name"} />

                    <HrInputField required={true} name={"companyName"} title={"Company name"} type={"text"} placeholder={"type your company name"} />

                    <HrInputField required={true} name={"photo"} title={"Company logo"} InputClasses={"file-input file-input-bordered w-full max-w-xs"} type={"file"} />

                    <HrInputField required={true} name={"email"} title={"Email"} type={"email"} placeholder={"type your email"} />

                    <HrInputField required={true} name={"password"} title={"Password"} type={"password"} placeholder={"type your password"} />

                    <HrInputField required={true} name={"birthDate"} title={"Date of Birth"} type={"date"} />

                    <HrPackageSelect required={true} name={'purchasingPackage'}></HrPackageSelect>

                    <HrInputField type={"submit"} value={"Sign up"} InputClasses={"cursor-pointer uppercase"} />
                </form>
            </div>

        </div>
    );
};

export default JoinAsHr;