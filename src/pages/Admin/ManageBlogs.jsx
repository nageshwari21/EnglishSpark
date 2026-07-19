import { useState } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { BLOGS as INITIAL } from '../../utils/constants'

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState(INITIAL)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', category: '', excerpt: '' })

  const handleAdd = (e) => {
    e.preventDefault()
    setBlogs([...blogs, { _id: `b${Date.now()}`, ...form, date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), image: '' }])
    setForm({ title: '', category: '', excerpt: '' })
    setShowForm(false)
  }

  const handleDelete = (id) => setBlogs(blogs.filter((b) => b._id !== id))

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Manage Blogs</h2>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary !px-4 !py-2 text-sm"><FaPlus size={12} /> Add Blog</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="card mt-6 space-y-4 p-6">
          <input required placeholder="Blog Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input-field" />
          <input required placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="input-field" />
          <textarea required placeholder="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="input-field" rows={3} />
          <button type="submit" className="btn-secondary">Save Blog</button>
        </form>
      )}

      <div className="card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase text-gray-500">
            <tr>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((b) => (
              <tr key={b._id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-primary">{b.title}</td>
                <td className="px-5 py-3">{b.category}</td>
                <td className="px-5 py-3">{b.date}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-3 text-gray-500">
                    <button className="hover:text-primary"><FaEdit /></button>
                    <button onClick={() => handleDelete(b._id)} className="hover:text-red-500"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
