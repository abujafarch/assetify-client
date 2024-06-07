import { Helmet } from "react-helmet-async";


const AddAsset = () => {
    return (
        <div className="font-raleway text-[#a8a7a7]">
            <Helmet>
                <title>Add Asset</title>
            </Helmet>
            <h1 className="font-raleway xs:text-xl font-light uppercase mb-5 text-center">Add Asset</h1>
            <form className="">
                <div className="grid gap-5 max-w-[600px] mx-auto">
                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">Asset Name</p>
                        <input className="bg-transparent w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" placeholder="asset name" type="text" />
                    </div>
                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">Type</p>
                        <input className="bg-transparent w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" placeholder="asset type" type="text" />
                    </div>
                    <div className="w-full">
                        <p className="uppercase text-sm mb-1">quantity</p>
                        <input className="bg-transparent w-full border outline-none rounded-sm px-3 py-2 border-[#192747] placeholder:text-[#5e5d5d]" placeholder="asset quantity" type="text" />
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