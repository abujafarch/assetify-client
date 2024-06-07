import { useState } from "react";
import NotAffiliatedEmployee from "./NotAffiliatedEmployee";
import PackageSection from "./PackageSection";


const AddEmployee = () => {
    const [employees, setEmployees] = useState([])
    console.log(employees);

    return (
        <div>
            <PackageSection></PackageSection>

            <h1 className="font-raleway mt-14 xs:text-xl text-[#a8a7a7] font-light uppercase mb-5 text-center">add employee</h1>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    <NotAffiliatedEmployee employees={employees} setEmployees={setEmployees} image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"employee"} />
                    <NotAffiliatedEmployee employees={employees} setEmployees={setEmployees} image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Ashiqur Rahman"} role={"employee"} />
                    <NotAffiliatedEmployee employees={employees} setEmployees={setEmployees} image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"employee"} />
                    <NotAffiliatedEmployee employees={employees} setEmployees={setEmployees} image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"employee"} />
                    <NotAffiliatedEmployee employees={employees} setEmployees={setEmployees} image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"employee"} />
                    <NotAffiliatedEmployee employees={employees} setEmployees={setEmployees} image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"employee"} />
                </div>

                <button disabled className="px-3 cursor-not-allowed text-[#a8a7a7] mt-10 uppercase text-xs py-[6px] rounded-sm border border-[#ffffff1f]">add selected employees</button>
            </div>
        </div>
    );
};

export default AddEmployee;