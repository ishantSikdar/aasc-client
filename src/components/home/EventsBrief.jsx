import EventBrief from "../common/Event";

export default function EventsBrief({ isMobile }) {
    return (
        <div className="bg-white md:py-10">
            {!isMobile && <h2 className="text-center text-4xl font-bold uppercase m-5">Events</h2>}
            <div className="p-10 bg-[#853333] flex flex-col md:flex-row gap-10 justify-center items-center overflow-auto">
                <EventBrief />
                <EventBrief />
                <EventBrief />
            </div>
        </div>
    )
}