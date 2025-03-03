import AboutBrief from '../../components/home/AboutBrief'
import AlumniBrief from '../../components/home/AlumniBrief'
import EventsBrief from '../../components/home/EventsBrief'
import HeroSection from '../../components/home/HeroSection'

export default function HomePage({ isMobile }) {
  return (
    <div className='relative text-white'>
      <HeroSection />
      <AlumniBrief />
      <AboutBrief />
      <EventsBrief isMobile={isMobile} />
    </div>
  )
}
