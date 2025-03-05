import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSection = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='my-6'>
      <div
        className='text-[#853333] text-center text-xl md:text-4xl underline lg:text-5xl font-bold uppercase mt-6 cursor-pointer flex justify-center items-center gap-2'
        onClick={toggleSection}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className='overflow-hidden'
      >
        {isOpen && <div className='mt-6'>{children}</div>}
      </motion.div>
    </div>
  )
}
