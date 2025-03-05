import { useEffect, useState } from 'react'
import CollapsibleSection from '../../components/common/CollapsibleSection'
import Loader from '../../components/common/Loader'
import StudentCouncilCard from '../../components/common/StudentCouncilCard'
import { client, urlFor } from '../../lib/sanity'
import Member from '../member'

const ITEMS_TO_SHOW = 6

export default function AascCouncilPage({ isMobile }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(ITEMS_TO_SHOW)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
          *[_type == 'aascTeam'] | order(id asc) {
            _id,
            id,
            name,
            aImage,
            Pos,
            linkedin,
            insta,
          }
        `

        const fetchedData = await client.fetch(query)
        setData(fetchedData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(ITEMS_TO_SHOW)
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 6, data.length))
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='my-20 flex flex-col gap-10 md:px-10'>
      <div className='text-[#853333] text-center flex flex-col items-center gap-2 md:mt-10'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase underline'>
          Student Team (2024-25)
        </h2>
      </div>

      <div className='flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 xl:gap-5 justify-center items-center'>
        <Member />
      </div>

      <CollapsibleSection title='Founding Student Team (2023-24)'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className='flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 xl:gap-5 justify-center items-center'>
              {data.slice(0, visibleCount).map((item) => (
                <StudentCouncilCard
                  key={item._id}
                  isMobile={isMobile}
                  photo={urlFor(item.aImage).url()}
                  name={item.name}
                  linkedin={item.linkedin}
                  position={item.Pos}
                  size='large'
                />
              ))}
            </div>

            {data.length > ITEMS_TO_SHOW && (
              <div className='mt-6 flex justify-center'>
                <button
                  onClick={handleToggle}
                  className={`px-6 py-2 text-white rounded-lg transition ${
                    isExpanded
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isExpanded ? 'Load Less' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </CollapsibleSection>
    </div>
  )
}
