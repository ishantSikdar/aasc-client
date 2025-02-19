import { Link } from 'react-router-dom'
import { ROUTE_ABOUT } from '../../constants/routes'
// import { motion } from 'framer-motion'

export default function AboutBrief({ isMobile }) {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:h-screen px-6 md:px-12 lg:px-20 xl:px-28 py-12 bg-gray-100">
      {/* Image on left for larger screens */}
      {!isMobile && (
        <div className="hidden xl:flex w-1/2 justify-center">
          <img src="/about_brief.png" alt="About" className="max-w-md xl:max-w-lg rounded-lg shadow-lg" />
        </div>
      )}

      {/* Content Section */}
      <div className="w-full xl:w-1/2 bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <h2 className="uppercase font-bold text-3xl md:text-4xl xl:text-5xl text-gray-900 mb-4">
          About the Alumni Association
        </h2>
        <p className="text-gray-700 text-sm md:text-md xl:text-lg leading-relaxed">
          The Alumni Association fosters lifelong connections and celebrates the achievements of our alumni.
          Serving as a bridge between past, present, and future, we provide a platform for networking,
          mentorship, and professional growth while honoring our alma mater’s legacy.
        </p>
        <div className="mt-6">
          <Link
            to={ROUTE_ABOUT}
            className="inline-block bg-[#4b39b5] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#372b8b] transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
