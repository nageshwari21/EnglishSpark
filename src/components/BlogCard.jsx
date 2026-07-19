import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BlogCard({ blog }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="card overflow-hidden">
      <img src={blog.image} alt={blog.title} className="h-40 w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x240/F5F7FB/0B2E83?text=Blog' }} />
      <div className="p-5">
        <span className="section-eyebrow">{blog.category}</span>
        <h3 className="mt-2 line-clamp-2 font-semibold text-primary">{blog.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">{blog.excerpt}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">{blog.date}</span>
          <Link to={`/blog/${blog._id}`} className="text-sm font-semibold text-accent hover:underline">Read More</Link>
        </div>
      </div>
    </motion.div>
  )
}
