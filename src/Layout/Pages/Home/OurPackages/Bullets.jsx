
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Bullets = ({ text }) => {
    return (
        <div className="flex items-center gap-2">
            <VscDebugBreakpointLog className="text-green-600 text-xl"></VscDebugBreakpointLog>
            <p className=" w-[95%] text-lg font-medium font-raleway">{text}</p>
        </div>
    );
};

export default Bullets;