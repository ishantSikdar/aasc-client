import { useNavigate } from 'react-router-dom'
import { urlFor } from '../../lib/sanity'
import { ROUTE_EVENT_DETAILS } from '../../constants/routes'

export default function EventBriefCard({ event }) {
  const navigate = useNavigate()

  const goToEventDetails = () => {
    navigate(`${ROUTE_EVENT_DETAILS.replace(':id', event._id)}`)
    navigate(0)
  }

  return (
    <button onClick={goToEventDetails} className='w-full h-full'>
      <div className='relative w-full md:w-[450px] h-[300px] '>
        <img
          alt=''
          className='absolute w-full h-full object-cover'
          src={urlFor(event.titleImage).url()}
        />

        <p className='absolute text-center bottom-4 text-3xl text-white bg-black/[0.5] p-3 w-full font-bold overflow-hidden text-nowrap text-ellipsis'>
          {event.title}
        </p>
      </div>
    </button>
  )
}
