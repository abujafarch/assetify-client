import EmployeeItem from "./EmployeeItem";


const MyEmployees = () => {
    return (
        <div  className="text-[#a8a7a7]">
            <h1 className="font-raleway xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">my employees</h1>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />
                    <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />
                    <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />
                    <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />
                    <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />
                    <EmployeeItem image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />
                </div>
            </div>
        </div>
    );
};

export default MyEmployees;