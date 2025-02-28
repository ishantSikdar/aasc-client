import { Link } from 'react-router-dom'
import { ROUTE_ABOUT } from '../../constants/routes'
import { motion } from 'framer-motion'

export default function AboutBrief() {
  return (
    <div className='relative flex flex-col xl:flex-row items-center justify-center px-6 md:px-12 lg:px-20 xl:px-28 py-12'>
      {/* Image on left for larger screens */}
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className='w-full xl:w-2/3 bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg'
      >
        <h2 className='uppercase font-bold text-3xl md:text-2xl xl:text-3xl text-[#fff] mb-4'>
          About the Alumni Association
        </h2>
        <p className='text-black text-sm md:text-md xl:text-lg leading-relaxed'>
          The Alumni Association fosters lifelong connections and celebrates the
          achievements of our alumni. Serving as a bridge between past, present,
          and future, we provide a platform for networking, mentorship, and
          professional growth while honoring our alma mater’s legacy.
        </p>
        <div className='mt-6'>
          <Link
            to={ROUTE_ABOUT}
            className='inline-block bg-[#3a3a3a] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#372b8b] transition duration-300'
          >
            Read More
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
