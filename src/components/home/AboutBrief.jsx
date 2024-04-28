import { Link } from "react-router-dom";
import { ROUTE_ABOUT } from "../../constants/routes";

export default function AboutBrief() {
  return (
    <div className="flex md:h-screen justify-center items-center">
      {/* Render this div only on tablet and desktop screens */}
      <div
        className="hidden md:block w-[50%] h-full"
        style={{
          backgroundImage: "url('/about_brief.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="my-auto md:w-[50%] bg-white p-16 md:px-20 lg:px-36 flex flex-col gap-3">
        <h2 className="uppercase font-bold text-3xl">About the Alumni Association</h2>
        <p className="font-light text-lg">Established in 1920, University of El Dorado has long been a home to critical thinking, progressive education, and a conscientious community. This private non-profit university is committed to pushing positive change and creating a caring world for everyone.</p>
        <Link to={ROUTE_ABOUT} className="uppercase underline text-[#4b39b5] font-bold">Read More</Link>
      </div>
    </div>
  );
}
