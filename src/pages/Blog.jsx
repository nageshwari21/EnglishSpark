import { useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import BlogCard from '../components/BlogCard'
import { BLOGS } from '../utils/constants'

const CATEGORIES = ['All', ...new Set(BLOGS.map((b) => b.category))]

export default function Blog() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return BLOGS.filter((b) => {
      const matchesCategory = category === 'All' || b.category === category
      const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Our Blog</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Blog</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-2">
              <FaSearch className="text-gray-400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search blogs..." className="w-full text-sm outline-none" />
            </div>
            {filtered.length === 0 ? (
              <p className="py-10 text-center text-gray-500">No articles match your search.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((b) => <BlogCard key={b._id} blog={b} />)}
              </div>
            )}
          </div>
          <aside>
            <div className="card p-5">
              <h3 className="mb-4 font-semibold text-primary">Categories</h3>
              <ul className="space-y-2 text-sm">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setCategory(cat)}
                      className={`w-full rounded-md px-3 py-2 text-left transition-colors ${
                        category === cat ? 'bg-primary text-white' : 'text-gray-600 hover:bg-surface'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
