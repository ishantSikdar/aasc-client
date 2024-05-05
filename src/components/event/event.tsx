import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client, urlFor } from "../../lib/sanity";
import { simpleEventCard } from "../../lib/interface";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const EventsPage = () => {
  const [data, setData] = useState<simpleEventCard[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
          *[_type == 'Events'] | order(_createdAt desc) {
            title,
            Description,
            "currentSlug": slug.current,
            titleImage
          }`;

        const fetchedData = await client.fetch(query);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle error state or display error message
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <>
      <div className="mt-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold underline text-orange-800 text-center">
          EVENTS
        </h1>
      </div>
      <div className="flex justify-center mt-12 mb-12  ">
        <div className="  grid grid-cols-1 md:grid-cols-2 mt-5 gap-20 ">
          {data.map((post, idx) => (
            <div
              key={idx}
              className=" bg-slate-100 p-10 border-2 border-solid border-gray-600 rounded-xl"
            >
              <img
                src={urlFor(post.titleImage).url()} // Assuming post.titleImage is a URL
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[400px] object-cover"
              />

              <h3 className="text-2xl line-clamp-2 font-bold underline md:text-2xl text-orange-800 mt-2">
                {post.title}
              </h3>
              <p className="line-clamp-3 mt-2 mb-7 text-xl text-black">
                {post.Description}{" "}
                {/* Assuming post.description is lowercase */}
              </p>
              <a
                href={`/src/event/${post.currentSlug}`}
                className="w-full mt-7 bg-slate-300 p-3 transition duration-500 hover:text-gray-50 hover:bg-black hover:cursor-pointer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
