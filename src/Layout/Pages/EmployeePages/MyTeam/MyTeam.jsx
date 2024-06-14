import { Helmet } from "react-helmet-async";
import TeamMember from "./TeamMember";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const MyTeam = () => {

    const axiosSecure = useAxiosSecure()
    const { employeeInfo } = useAuthInfo()

    const { data: myTeamMembers = [] } = useQuery({
        queryKey: ['myTeam'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-team/${employeeInfo?.companyId}`)
            return res.data
        },
        enabled: employeeInfo.hired ? true : false
    })
    // console.log(myTeamMembers)

    if (!employeeInfo.hired) {
        return <div>
            <p className="text-center uppercase font-raleway text-[#8f8f8f]">You are not connected with any company. Please contact with you HR manger</p>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>My Teams</title>
            </Helmet>
            <h3 className="text-2xl opacity-50 font-raleway font-light mb-10 text-center uppercase">My team members</h3>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                    {
                        myTeamMembers.map(member => <TeamMember key={member._id} member={member} />)
                    }
                    {/* <TeamMember image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Abujafar Chhaleh"} role={"admin"} />

                    <TeamMember image={'https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg'} name={"Ashiqur Rahman"} role={"admin"} /> */}
                </div>
            </div>
        </div>
    );
};

export default MyTeam;