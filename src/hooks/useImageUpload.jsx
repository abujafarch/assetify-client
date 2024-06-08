import useAxiosPublic from "./useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const useImageUpload = async (imageFile) => {

    const axiosPublic = useAxiosPublic()

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    return res

};

export default useImageUpload;