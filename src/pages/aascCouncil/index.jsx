import { useState, useEffect } from 'react'
import StudentCouncilCard from '../../components/common/StudentCouncilCard'
import Loader from '../../components/common/Loader'
import { client, urlFor } from '../../lib/sanity'

export default function AascCouncilPage({ isMobile }) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
        *[_type == 'aascTeam'] | order(Date desc) {
          _id,
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
        console.error('Error fetching events:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <div className='my-20 flex flex-col gap-10 md:px-10'>
      <div className='text-[#853333] text-center  flex flex-col items-center gap-2 md:mt-10'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase'>
          Alumni Relations Student Council
        </h2>
        <div className='h-1 w-[70%] lg:w-[58%]  bg-[#853333]'></div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 xl:gap-5 justify-center items-center'>
          {data &&
            data
              .sort(() => Math.random() - 0.5)
              .map((item) => (
                <StudentCouncilCard
                  key={item._id}
                  isMobile={isMobile}
                  photo={urlFor(item.aImage).url()}
                  name={item.name}
                  instagram={item.insta}
                  linkedin={item.linkedin}
                  position={item.Pos}
                />
              ))}
        </div>
      )}
    </div>
  )
}
