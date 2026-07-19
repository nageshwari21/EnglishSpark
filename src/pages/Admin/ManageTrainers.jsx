import { useState } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { TRAINERS as INITIAL } from '../../utils/constants'

export default function ManageTrainers() {
  const [trainers, setTrainers] = useState(INITIAL)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', role: '', experience: '' })

  const handleAdd = (e) => {
    e.preventDefault()
    setTrainers([...trainers, { _id: `t${Date.now()}`, ...form, image: '', bio: '', rating: 5 }])
    setForm({ name: '', role: '', experience: '' })
    setShowForm(false)
  }

  const handleDelete = (id) => setTrainers(trainers.filter((t) => t._id !== id))

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Manage Trainers</h2>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary !px-4 !py-2 text-sm"><FaPlus size={12} /> Add Trainer</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="card mt-6 grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
          <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
          <input required placeholder="Specialization" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="input-field" />
          <input required placeholder="Experience (e.g. 5+ Years)" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="input-field" />
          <button type="submit" className="btn-secondary sm:col-span-3">Save Trainer</button>
        </form>
      )}

      <div className="card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase text-gray-500">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Specialization</th>
              <th className="px-5 py-3">Experience</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((t) => (
              <tr key={t._id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-primary">{t.name}</td>
                <td className="px-5 py-3">{t.role}</td>
                <td className="px-5 py-3">{t.experience}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-3 text-gray-500">
                    <button className="hover:text-primary"><FaEdit /></button>
                    <button onClick={() => handleDelete(t._id)} className="hover:text-red-500"><FaTrash /></button>
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
