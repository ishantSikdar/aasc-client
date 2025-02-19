import { Link } from 'react-router-dom'
import { ROUTE_ABOUT } from '../../constants/routes'
import { motion } from 'framer-motion'

export default function AboutBrief({ isMobile }) {
  return (
    <div className='flex relative justify-between items-center overflow-hidden py-10 px-5'>
      <div className='my-auto z-10 text-white p-10 flex flex-col gap-3'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className='uppercase font-bold text-2xl md:text-3xl xl:text-4xl'
        >
          About the Alumni Association
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: false }}
          className='font-light text-sm md:text-md xl:text-lg text-left'
        >
          The Alumni Association has been created with the vision of fostering
          lifelong connections and celebrating the achievements of our esteemed
          alumni. We serve as a bridge between past, present, and future,
          providing a platform for networking, mentorship, and professional
          growth. We endeavour to foster the legacy of our alma mater while also
          championing the diverse accomplishments of our alumni.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, delay: 0.4 }}
        >
          <Link
            to={ROUTE_ABOUT}
            className='uppercase underline text-[#4b39b5] font-bold'
          >
            Read More
          </Link>
        </motion.span>
      </div>
    </div>
  )
}
