import { useState } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { COURSES as INITIAL } from '../../utils/constants'

export default function ManageCourses() {
  const [courses, setCourses] = useState(INITIAL)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', duration: '', price: '', level: '' })

  const handleAdd = (e) => {
    e.preventDefault()
    setCourses([...courses, { _id: `c${Date.now()}`, ...form, price: Number(form.price), image: '', language: 'English', description: '', curriculum: [] }])
    setForm({ title: '', duration: '', price: '', level: '' })
    setShowForm(false)
  }

  const handleDelete = (id) => setCourses(courses.filter((c) => c._id !== id))

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Manage Courses</h2>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary !px-4 !py-2 text-sm"><FaPlus size={12} /> Add Course</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="card mt-6 grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <input required placeholder="Course Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input-field" />
          <input required placeholder="Duration (e.g. 2 Months)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="input-field" />
          <input required type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="input-field" />
          <input required placeholder="Level" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="input-field" />
          <button type="submit" className="btn-secondary sm:col-span-2">Save Course</button>
        </form>
      )}

      <div className="card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase text-gray-500">
            <tr>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Duration</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Level</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c._id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-primary">{c.title}</td>
                <td className="px-5 py-3">{c.duration}</td>
                <td className="px-5 py-3">₹{Number(c.price).toLocaleString('en-IN')}</td>
                <td className="px-5 py-3">{c.level}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-3 text-gray-500">
                    <button className="hover:text-primary"><FaEdit /></button>
                    <button onClick={() => handleDelete(c._id)} className="hover:text-red-500"><FaTrash /></button>
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
