import { useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import CourseCard from '../components/CourseCard'
import { COURSES } from '../utils/constants'

const CATEGORIES = ['All Courses', ...new Set(COURSES.map((c) => c.title))]
const PAGE_SIZE = 6

export default function Courses() {
  const [category, setCategory] = useState('All Courses')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesCategory = category === 'All Courses' || c.title === category
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Our Courses</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Courses</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="card p-5">
              <h3 className="mb-4 font-semibold text-primary">Categories</h3>
              <ul className="space-y-2 text-sm">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => { setCategory(cat); setPage(1) }}
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

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-2">
              <FaSearch className="text-gray-400" />
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                placeholder="Search courses..."
                className="w-full text-sm outline-none"
              />
            </div>

            {pageItems.length === 0 ? (
              <p className="py-10 text-center text-gray-500">No courses match your search.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((course) => <CourseCard key={course._id} course={course} />)}
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`h-9 w-9 rounded-md text-sm font-medium transition-colors ${
                      page === i + 1 ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-surface'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-surface"
                >
                  Next »
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
