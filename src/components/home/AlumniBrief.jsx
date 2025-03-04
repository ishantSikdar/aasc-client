import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import featuredAlumni from '../../constants/teamData/featured-alumni.json'
import StudentCouncilCard from '../common/StudentCouncilCard'
import { motion } from 'framer-motion'

export default function AlumniBrief() {
  const swiperRef = useRef(null)
  const handlePrev = () => {
    swiperRef.current?.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.slideNext()
  }

  return (
    <div className='relative md:py-10 overflow-x-hidden'>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='text-center text-4xl font-bold uppercase m-5'
      >
        Featured Alumni
      </motion.h2>
      <div className='m-10 pb-4 relative'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={'auto'}
          breakpoints={{
            282: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            660: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          initialSlide={4}
          loop
          className='w-full h-[250px] !overflow-visible mx-auto'
        >
          {featuredAlumni.map((alumni, i) => (
            <SwiperSlide key={i} className='flex justify-center items-center'>
              <StudentCouncilCard
                name={alumni.name}
                linkedin={alumni.link}
                photo={alumni.image}
                position={alumni.position}
                size='medium'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className='absolute top-1/2 -translate-y-1/2 z-50 left-0 bg-white/50 backdrop-blur-sm p-4 rounded-full'
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} className='text-black' />
        </button>
        <button
          className='absolute top-1/2 -translate-y-1/2 z-50 right-0 bg-white/50 backdrop-blur-sm p-4 rounded-full'
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} className='text-black' />
        </button>
      </div>
    </div>
  )
}
