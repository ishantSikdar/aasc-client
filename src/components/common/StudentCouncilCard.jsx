export default function StudentCouncilCard({
  photo,
  name,
  position,
  linkedin,
  instagram,
}) {
  return (
    <div className='relative p-4 w-[240px] h-[350px] bg-[#EEEBE8] rounded-md flex flex-col overflow-hidden justify-between items-center'>
      <img
        src={photo}
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='text-white absolute text-center bottom-5 flex flex-col gap-[2px] z-10 bg-black/50 py-2 w-full'>
        <h3 className='font-bold text-2xl'>{name}</h3>
        <div className='font-bold'>{position}</div>
      </div>

      {/* <div className='h-40 w-32 rounded-[100%] bg-black/50 absolute -top-10 -right-16 z-10' /> */}

      <div className='flex flex-col gap-2 z-20 text-4xl absolute top-3 right-3'>
        {linkedin && (
          <a href={linkedin}>
            <img src='/linkedin.png' alt='' className='w-8' />
          </a>
        )}

        {instagram && (
          <a href={instagram}>
            <img src='/instagram.png' alt='' className='w-8' />
          </a>
        )}
      </div>
    </div>
  )
}
