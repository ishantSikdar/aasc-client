import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useRef, useState } from 'react'
import { client } from '../../lib/sanity'
import EventBrief from '../common/EventBriefCard'
import Loader from '../common/Loader'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function EventsBrief({ isMobile }) {
  const swiperRef = useRef(null)
  const [latestEvents, setLatestEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchLatestEvents = async () => {
    try {
      const query = `*[_type == 'Events'] | order(Date desc) [0...3] {
                _id,
                title,
                Date,
                "currentSlug": slug.current,
                titleImage,
            }`

      const fetchedEvents = await client.fetch(query)
      setLatestEvents(fetchedEvents)
      setIsLoading(false)
    } catch (error) {
      console.error(`Error Retrieving Events: ${error.message}`)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchLatestEvents()
  }, [])

  const handlePrev = () => {
    swiperRef.current?.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.slideNext()
  }

  return (
    <div className='relative md:py-10 md:overflow-x-hidden'>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='text-center text-4xl font-bold uppercase m-5'
      >
        Events
      </motion.h2>

      <div className='m-10 pb-4 md:block hidden relative'>
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={80}
            slidesPerView={'auto'}
            initialSlide={1}
            loop
            className='h-max w-[400px] !overflow-visible'
          >
            {latestEvents.map((event, i) => (
              <SwiperSlide key={event._id}>
                <EventBrief idx={i} event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

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

      <div className='flex flex-col p-4 overflow-hidden gap-4 md:hidden'>
        {latestEvents.map((event, i) => (
          <EventBrief idx={i} event={event} key={event._id} />
        ))}
      </div>
    </div>
  )
}
