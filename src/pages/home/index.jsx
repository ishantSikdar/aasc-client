import AboutBrief from '../../components/home/AboutBrief'
import EventsBrief from '../../components/home/EventsBrief'
import HeroSection from '../../components/home/HeroSection'

export default function HomePage({ isMobile }) {
  return (
    <>
      <HeroSection />
      <div
        className='relative'
        style={{
          backgroundImage: `url('/about_brief.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='absolute inset-0 bg-black/70 backdrop-blur-md' /> 
        <AboutBrief isMobile={isMobile} />
        <EventsBrief isMobile={isMobile} />
      </div>
    </>
  )
}
