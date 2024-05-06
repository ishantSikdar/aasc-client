import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { client, urlFor } from "../../lib/sanity";
import Loader from "../../components/common/Loader"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import EventCard from "../../components/event/eventCard";

export default function EventDetails() {
    const { id } = useParams();
    const [eventData, setEventData] = useState({});
    const [otherEvents, setOtherEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOtherEventLoading, setIsOtherEventLoading] = useState(true);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const singleEventQuery = `*[_type == 'Events' && _id == '${id}'] {
                    title,
                    Description,
                    Date,
                    PDF {
                        asset-> {
                            url
                        }
                    },
                    titleImage,
                    Link,
                    venue,
                }`;

                const otherEventQuery = `*[_type == 'Events' && _id != '${id}'] | order(Date desc) {
                    _id,
                    title,
                    Date,
                    titleImage,
                }`;

                const fetchedEventData = await client.fetch(singleEventQuery);
                setEventData(fetchedEventData[0]);
                setIsLoading(false);

                const otherFetchedEvents = await client.fetch(otherEventQuery);
                setOtherEvents(otherFetchedEvents.slice(0, 3));
                setIsOtherEventLoading(false);

            } catch (error) {
                console.error("Error fetching events:", error);
                setIsLoading(false);
                setIsOtherEventLoading(false);

            }
        }
        fetchEventData();
    }, [])

    function truncateDescription(description, maxLength) {
        if (description.length > maxLength) {
            const truncatedText = description.substring(0, maxLength);
            const lastSpaceIndex = truncatedText.lastIndexOf(' ');
            return truncatedText.substring(0, lastSpaceIndex);
        }
        return description;
    }
    
    return (
        <div className='px-7 md:px-12'>
            {isLoading ?

                (<Loader />) :

                (<div className='mt-20 md:mt-32 flex flex-col gap-4'>

                    {/* Title */}
                    <div className='flex flex-col gap-1 items-center md:gap-3'>
                        <h1 className='text-3xl text-center font-bold text-[#853333] md:text-5xl '>{eventData.title}</h1>
                        <div className='w-[70%] h-1 md:h-[5px] bg-[#853333]'></div>
                    </div>

                    {/* Event Details */}
                    <div className='flex flex-col xl:flex-row gap-5 md:gap-7 py-2 h-max' >
                        {/* Cover Image */}
                        <img src={urlFor(eventData?.titleImage).url()} alt="" className='rounded-3xl max-h-96 object-cover' />

                        <div className="flex flex-col gap-5">
                            {/* Description */}
                            <div className="flex flex-col gap-2 md:gap-4">
                                <div className="font-bold text-2xl md:text-3xl">ABOUT THE EVENT</div>
                                <div className="text-lg md:text-xl overflow-hidden">{truncateDescription(eventData.Description, 900)}</div>
                            </div>
                        </div>
                    </div>

                    {/* Left Over Description */}
                    <div className="text-lg md:text-xl">{eventData.Description.length > 900 && eventData.Description.substring(900)}</div>


                    {/* socials */}
                    <div className="flex gap-4 text-5xl md:text-5xl text-[#853333]">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>

                    {/* Other details */}
                    <div className="text-xl md:text-xl">
                        <div className="font-bold">Date: <span className="font-medium">{eventData.Date}</span></div>
                        <div className="font-bold">Venue: <span className="font-medium">{eventData.venue}</span></div>
                        <div className="font-bold">View Pictures: <a href={eventData.Link} className="hover:underline text-blue-600 font-medium">Click to view photos</a></div>
                    </div>

                    <div className='flex flex-col gap-1 items-center'>
                        <h1 className='text-3xl text-center font-bold text-[#853333] md:text-5xl'>Other Events</h1>
                        <div className='w-[30%] h-1 md:h-[5px] bg-[#853333]'></div>
                    </div>
                    {/* Other Events */}
                    <div className="flex flex-col xl:flex-row xl:overflow-x-auto mt-5 gap-2 md:gap-10 mb-20">
                        {isOtherEventLoading ? <Loader /> : (
                            otherEvents.map((event) => <EventCard post={event} key={event._id} isNotFirst={true} />))}
                    </div>
                </div>)}
        </div>

    )
}
