import MaxAssetUser from "./MaxAssetUser";


const MaxAssetsUsers = () => {
    return (
        <div>
            <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
                <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">max assets users</h2>
                <div className="mt-5 border-t border-[#ffffff10]">
                    <MaxAssetUser image={"https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg"} name={"Abujafar Chhaleh Naeem"} quantity={"23"}></MaxAssetUser>
                    <MaxAssetUser image={"https://i.ibb.co/yXLPgsH/1000-F-147271302-djhdwlc-Ak2-P7n-AAFUWM9-Ehraj-BEb-FSoj.jpg"} name={"Ashiqur Rahman"} quantity={"17"}></MaxAssetUser>
                    <MaxAssetUser image={"https://i.ibb.co/VtD7hs9/images.jpg"} name={"Shezan Islam"} quantity={"15"}></MaxAssetUser>
                </div>
            </div>
        </div>
    );
};

export default MaxAssetsUsers;