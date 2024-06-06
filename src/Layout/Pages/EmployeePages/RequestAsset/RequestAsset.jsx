import ReqItem from "./ReqItem";


const RequestAsset = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                <ReqItem name={"Samsung S24 Ultra"} type={"Returnable"} available={"Available"}></ReqItem>
                <ReqItem name={"Samsung S24 Ultra Samsung S24 Ultra"} type={"Non-returnable"} available={"Out of stock"}></ReqItem>
            </div>
        </div>
    );
};

export default RequestAsset;