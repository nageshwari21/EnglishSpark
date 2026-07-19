import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher, FaComments, FaClock, FaHeadset } from 'react-icons/fa'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import CourseCard from '../components/CourseCard'
import TestimonialCard from '../components/TestimonialCard'
import { COURSES, TESTIMONIALS } from '../utils/constants'

const WHY_US = [
  { icon: FaChalkboardTeacher, title: 'Expert Trainers', desc: 'Learn from highly experienced trainers.' },
  { icon: FaComments, title: 'Interactive Classes', desc: 'Live sessions with practical learning.' },
  { icon: FaClock, title: 'Flexible Learning', desc: 'Learn anytime, anywhere.' },
  { icon: FaHeadset, title: 'Personalized Support', desc: 'Get individual attention and feedback.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Our Popular Courses</h2>
            <p className="mt-2 text-gray-500">Choose four most in-demand English speaking courses.</p>
          </motion.div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.slice(0, 4).map((course, i) => (
              <motion.div key={course._id} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/courses" className="btn-secondary">View All Courses</Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Why Choose EnglishSpark?</h2>
          </motion.div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="card flex flex-col items-center p-6 text-center"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={22} />
                </span>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">What Our Students Say</h2>
          </motion.div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t._id} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
