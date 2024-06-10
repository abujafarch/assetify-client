import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";
import toast from "react-hot-toast";


const AddAsset = () => {

    const axiosSecure = useAxiosSecure()
    const { hrCompany } = useAuthInfo()

    const handleAddAsset = (e) => {
        e.preventDefault()
        const form = e.target
        const assetName = form.assetName.value
        const assetType = form.assetType.value
        const returnability = form.returnability.value
        const quantity = parseInt(form.quantity.value)
        const addedDate = new Date().toLocaleDateString("en-GB")

        console.log({ assetName, addedDate, returnability, assetType, quantity, companyId: hrCompany._id });
        const asset = { assetName, returnability, assetType, quantity, addedDate, companyId: hrCompany._id }

        axiosSecure.post('/add-asset', asset)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success('asset added')
                    form.reset()
                }
            })

    }

    return (
        <div className="font-raleway text-[#a8a7a7]">
            <Helmet>
                <title>Add Asset</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl font-light uppercase mb-5 text-center">Add Asset</h1>
            <form onSubmit={handleAddAsset} className="">
                <div className="grid gap-5 max-w-[600px] mx-auto">
                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">Asset Name</p>
                        <input name="assetName" required className="bg-transparent w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" placeholder="asset name" type="text" />
                    </div>
                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">Type</p>
                        <input name="assetType" required className="bg-transparent w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" placeholder="asset type" type="text" />
                    </div>
                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">quantity</p>
                        <input name="quantity" required className="bg-transparent w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" placeholder="asset quantity" type="number" />
                    </div>

                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">Returnability</p>
                        <select defaultValue={"select"} name="returnability" required className="bg-[#192747] w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" >
                            <option className="bg-transparent" defaultValue={"select"} disabled value="select">select</option>
                            <option className="bg-transparent" value="returnable">Returnable</option>
                            <option className="bg-transparent" value="non-returnable">Non-returnable</option>
                        </select>
                        {/* <input name="quantity"  placeholder="asset quantity" type="number" /> */}
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <button className="text-center border border-[#192747] py-2 px-4 rounded-sm uppercase">Add Asset</button>
                </div>
            </form>
        </div>
    );
};

export default AddAsset;