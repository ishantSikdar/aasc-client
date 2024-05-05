import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { client, urlFor } from "../../lib/sanity";
import Loader from "../../components/common/Loader"

export default function EventDetails() {
    const { id } = useParams();
    const [eventData, setEventData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const qlQuery = `*[_type == 'Events' && _id == '${id}'] {
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

                const fetchedData = await client.fetch(qlQuery);
                setEventData(fetchedData[0]);

            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    console.log(eventData)


    return (
        <div className="px-6 lg:px-24">
            {isLoading ? <Loader /> : (
                <div>
                    <div className="p-5">
                        <h1 className="py-5 text-3xl pt-24 border-b-4 border-[#853333] lg:text-5xl font-bold">
                            {eventData?.title}
                        </h1>
                        <div className=" py-5 gap-8 ">
                            {eventData?.titleImage && <img
                                src={`${urlFor(eventData?.titleImage).url()}`}
                                alt=""
                                className="h-[400px] w-full aspect-square rounded-3xl object-cover"
                            />}

                            <div className="text-lg">
                                <div className=" mb-10 lg:mb-16">
                                    <h2 className="text-2xl font-semibold my-4 text-blue">
                                        About the Event{" "}
                                    </h2>
                                    <p className="">{eventData?.Description}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-semibold text-blue ">
                                        Date :
                                    </p>
                                    <span>{eventData?.Date?.toString()}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-semibold text-blue">
                                        Venue :{" "}
                                    </p>
                                    <span>{eventData?.venue}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <p className="text-xl font-semibold text-blue">
                                    View Pictures :
                                </p>{" "}
                                <a target="/" href={eventData?.Link}>
                                    <span>Click to View Photos</span>
                                </a>
                            </div>

                        </div>
                    </div>
                    {eventData?.PDF && <div>
                        <h1 className="py-5  text-3xl  lg:text-4xl font-bold">
                            Event Report
                        </h1>
                        <iframe
                            src={eventData.PDF.asset.url}
                            title={eventData?._id}
                            width="100%"
                            height="480"
                            allow="autoplay"
                            className='mb-20'
                        ></iframe>
                    </div>}
                </div>)}
        </div>
    )
}