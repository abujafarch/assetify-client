import LimitedItem from "./LimitedItem";


const LimitedStock = () => {
    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl uppercase text-[#a8a7a7] font-light font-raleway">limited items</h2>
            <div className="mt-5 border-t border-[#ffffff10]">
                <LimitedItem name={"Dell Laptop DS2023"} category={"laptop"} quantity={"4"}></LimitedItem>
                <LimitedItem name={"Dell Laptop DS2023"} category={"laptop"} quantity={"4"}></LimitedItem>
                <LimitedItem name={"Dell Laptop DS2023"} category={"laptop"} quantity={"4"}></LimitedItem>
                <LimitedItem name={"Dell Laptop DS2023"} category={"laptop"} quantity={"4"}></LimitedItem>
                <LimitedItem name={"Dell Laptop DS2023"} category={"laptop"} quantity={"4"}></LimitedItem>
            </div>
        </div>
    );
};

export default LimitedStock;