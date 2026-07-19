import { motion } from 'framer-motion'
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaTrophy } from 'react-icons/fa'

const STATS = [
  { icon: FaUserGraduate, value: '5000+', label: 'Students Trained' },
  { icon: FaChalkboardTeacher, value: '50+', label: 'Expert Trainers' },
  { icon: FaBook, value: '100+', label: 'Courses' },
  { icon: FaTrophy, value: '95%', label: 'Success Rate' },
]

export default function Stats() {
  return (
    <section className="bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 text-white"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent">
              <s.icon size={18} />
            </span>
            <div>
              <p className="text-xl font-bold leading-tight">{s.value}</p>
              <p className="text-xs text-blue-100">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
