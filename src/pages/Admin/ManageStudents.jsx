import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const INITIAL = [
  { _id: 's1', name: 'Anjali Sharma', email: 'anjali@example.com', course: 'Spoken English', joined: '2025-01-12' },
  { _id: 's2', name: 'Rohit Verma', email: 'rohit@example.com', course: 'IELTS Preparation', joined: '2025-02-03' },
  { _id: 's3', name: 'Neha Patil', email: 'neha@example.com', course: 'Interview Preparation', joined: '2025-03-21' },
]

export default function ManageStudents() {
  const [students, setStudents] = useState(INITIAL)
  const handleDelete = (id) => setStudents(students.filter((s) => s._id !== id))

  return (
    <div>
      <h2 className="text-xl font-bold text-primary">Manage Students</h2>
      <div className="card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase text-gray-500">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Course</th>
              <th className="px-5 py-3">Joined</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-primary">{s.name}</td>
                <td className="px-5 py-3">{s.email}</td>
                <td className="px-5 py-3">{s.course}</td>
                <td className="px-5 py-3">{s.joined}</td>
                <td className="px-5 py-3">
                  <button onClick={() => handleDelete(s._id)} className="text-gray-500 hover:text-red-500"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
