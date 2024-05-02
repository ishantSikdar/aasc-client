

import AboutBrief from "../../components/home/AboutBrief";
import EventsBrief from "../../components/home/EventsBrief";
import HeroSection from "../../components/home/HeroSection";


export default function HomePage({ isMobile }) {
  return (
    <div>
      <HeroSection  />
      <AboutBrief isMobile={isMobile}/>
      <EventsBrief isMobile={isMobile} />
    </div>
  )
}