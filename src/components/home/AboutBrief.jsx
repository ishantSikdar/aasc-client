import { Link } from "react-router-dom";
import { ROUTE_ABOUT } from "../../constants/routes";

export default function AboutBrief({ isMobile }) {
  return (
    <div className="flex xl:h-screen justify-between items-center overflow-hidden">
      {/* Render this div only on tablet and desktop screens */}
      {!isMobile && <img src="/about_brief.png" alt="About" className="h-full" />}

      <div className="my-auto md:w-[50%] bg-white p-10 flex flex-col gap-3">
        <h2 className="uppercase font-bold text-2xl md:text-3xl xl:text-4xl">About the Alumni Association</h2>
        <p className="font-light text-sm md:text-md xl:text-lg">
          The Alumni Association has been created with the vision of fostering lifelong connections and celebrating the achievements of our esteemed alumni. We serve as a bridge between past, present, and future, providing a platform for networking, mentorship, and professional growth. We endeavour to foster the legacy of our alma mater while also championing the diverse accomplishments of our alumni.
        </p>
        <Link to={ROUTE_ABOUT} className="uppercase underline text-[#4b39b5] font-bold">Read More</Link>
      </div>
    </div>
  );
}