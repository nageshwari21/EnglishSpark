import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaClock } from 'react-icons/fa'

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card overflow-hidden"
    >
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x240/0B2E83/FFFFFF?text=' + encodeURIComponent(course.title) }} />
      <div className="p-5">
        <h3 className="font-semibold text-primary">{course.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
          <FaClock size={11} /> Duration: {course.duration}
        </p>
        <p className="mt-3 text-lg font-bold text-accent">₹{course.price.toLocaleString('en-IN')}</p>
        <Link to={`/courses/${course._id}`} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
          View Details →
        </Link>
      </div>
    </motion.div>
  )
}
