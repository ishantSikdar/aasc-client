import { scrollToTop } from '../../utils/pageUtil,js'

export default function BackToTop() {
  return (
    <button
      onClick={scrollToTop}
      className='w-full h-14 cursor-pointer bg-white/70 backdrop-blur-md text-white font-medium'
    >
      Back to top
    </button>
  )
}
