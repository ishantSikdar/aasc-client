import { useNavigate } from "react-router-dom";
import { urlFor } from "../../lib/sanity";
import { ROUTE_EVENT_DETAILS } from "../../constants/routes";
import { useEffect, useRef } from "react";


export default function EventCard({ post, isNotFirst }) {
    const lineRef = useRef(null);
    const navigate = useNavigate();

    const goToEventDetails = () => {
        navigate(`${ROUTE_EVENT_DETAILS.replace(":id", post._id)}`);
        navigate(0);
    }
    
    useEffect(() => {
        if (lineRef.current) {
            const titleLength = post.title.length;
            lineRef.current.style.width = `${titleLength * 15}px`;
        }
    }, [post.title]);

    return (
        <button onClick={goToEventDetails}
            className={`relative text-left h-64 md:h-[500px] xl:h-[300px] rounded-3xl ${isNotFirst ? 'xl:w-[47%]' : 'xl:w-full'}`}
            style={{
                backgroundImage: `url(${urlFor(post.titleImage).url()})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div
                className="absolute inset-0 rounded-3xl"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>

            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 flex flex-col gap-1 md:gap-2 text-white w-[80%]">
                <h1 className="font-bold text-2xl md:text-5xl xl:text-4xl overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {post.title}
                </h1>
                <div ref={lineRef} className="h-[1pt] md:h-[2px] xl:h-[1pt] bg-white max-w-full"></div>
                <h2 className="font-medium text-base md:text-2xl xl:text-xl overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {post.Date}
                </h2>
            </div>
        </button>
    );
}