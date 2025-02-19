import { useEffect, useState } from 'react'
import { client } from '../../lib/sanity'
import EventBrief from '../common/EventBriefCard'
import Loader from '../common/Loader'
import { motion } from 'framer-motion'

export default function EventsBrief({ isMobile }) {
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

  return (
    <div className='relative md:py-10'>
      {!isMobile && (
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className='text-center text-4xl font-bold uppercase m-5'
        >
          Events
        </motion.h2>
      )}
      <div className='p-10 flex flex-col md:flex-row gap-10 justify-center items-center overflow-auto'>
        {isLoading ? (
          <Loader />
        ) : (
          latestEvents.map((event, i) => (
            <EventBrief idx={i} event={event} key={event._id} />
          ))
        )}
      </div>
    </div>
  )
}
