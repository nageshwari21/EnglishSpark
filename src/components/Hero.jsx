import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Speak Better.<br />
            Think Better.<br />
            <span className="text-accent">Grow Better.</span>
          </h1>
          <p className="mt-5 max-w-md text-gray-600">
            Join EnglishSpark and unlock your potential with expert-led English speaking courses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/demo-class" className="btn-primary">
              Book Free Demo <FaChevronRight size={12} />
            </Link>
            <Link to="/courses" className="btn-outline">
              Explore Courses
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="absolute -left-6 top-6 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-primary shadow-card">
            Speak Confidently
          </div>
          <div className="absolute -right-4 bottom-24 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-primary shadow-card">
            Learn Effectively
          </div>
          <img
            src="/images/hero-student.jpg"
            alt="Confident EnglishSpark student"
            className="h-96 w-full max-w-sm rounded-2xl object-cover shadow-cardHover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x600/0B2E83/FFFFFF?text=EnglishSpark' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
