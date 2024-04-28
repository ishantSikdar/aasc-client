import AboutBrief from "../../components/home/AboutBrief";
import HeroSection from "../../components/home/HeroSection";

export default function HomePage({ isMobile }) {
  return (
    <div>
      <HeroSection  />
      <AboutBrief isMobile={isMobile}/>
    </div>
  )
}