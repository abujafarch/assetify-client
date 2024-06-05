

const Event = () => {
    return (
        <div className="border h-max border-[#ffffff10] p-5 pb-8 rounded-md bg-[#ffffff03] text-white">
            <h2 className="text-xl text-[#a8a7a7] font-semibold font-raleway">New Event</h2>
            <div className="mt-5 text-[#a8a7a7]">
                <img className="rounded-md" src="https://i.ibb.co/WV0k40M/1715091435390-e-2147483647-v-beta-t-a-oo-Qt-Z5-J4-DTh-RJv-SJp-Qj-PG9x5czj-Yk-Ut-Gnw-Nfze-KRE.png" />
                <h3 className="text-xl font-raleway font-semibold  mt-5">React 19 Conference</h3>
                <span className="text-xs font-poppins border border-[#ffffff1f] font-light rounded-xl px-2 py-[2px]">Event date : 29-06-24</span>
                <p className="mt-2 font-raleway font-medium">React 19: Unlocking enhanced performance, advanced concurrent features, better Suspense support, and improved developer tools for streamlined, responsive applications</p>
            </div>
        </div>
    );
};

export default Event;