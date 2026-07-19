import { useParams, Link } from 'react-router-dom'
import { BLOGS } from '../utils/constants'

export default function BlogDetails() {
  const { id } = useParams()
  const blog = BLOGS.find((b) => b._id === id)

  if (!blog) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-lg text-gray-600">Article not found.</p>
        <Link to="/blog" className="mt-4 inline-block font-semibold text-accent">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">{blog.title}</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Blog / {blog.title}</p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-72 w-full rounded-xl object-cover shadow-card"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x450/F5F7FB/0B2E83?text=Blog' }}
        />
        <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
          <span className="section-eyebrow">{blog.category}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
        <p className="mt-6 leading-relaxed text-gray-600">{blog.excerpt}</p>
        <p className="mt-4 leading-relaxed text-gray-600">
          Consistent daily practice is what separates confident English speakers from the rest. Set aside a few minutes
          every day to read aloud, listen actively, and speak with a partner or trainer. Over a few weeks, this steady
          rhythm builds fluency far more effectively than occasional long sessions.
        </p>
        <Link to="/blog" className="mt-8 inline-block font-semibold text-accent">← Back to Blog</Link>
      </article>
    </>
  )
}
