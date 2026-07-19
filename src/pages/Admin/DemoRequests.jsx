import { useState } from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

const INITIAL = [
  { _id: 'd1', name: 'Amit Kulkarni', email: 'amit@example.com', course: 'Spoken English', date: '2026-07-22', status: 'Pending' },
  { _id: 'd2', name: 'Priyanka Rao', email: 'priyanka@example.com', course: 'IELTS Preparation', date: '2026-07-24', status: 'Confirmed' },
]

export default function DemoRequests() {
  const [requests, setRequests] = useState(INITIAL)

  const handleConfirm = (id) => setRequests(requests.map((r) => (r._id === id ? { ...r, status: 'Confirmed' } : r)))
  const handleDelete = (id) => setRequests(requests.filter((r) => r._id !== id))

  return (
    <div>
      <h2 className="text-xl font-bold text-primary">Demo Requests</h2>
      <div className="card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase text-gray-500">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Course</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r._id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-primary">{r.name}</td>
                <td className="px-5 py-3">{r.email}</td>
                <td className="px-5 py-3">{r.course}</td>
                <td className="px-5 py-3">{r.date}</td>
                <td className="px-5 py-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${r.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{r.status}</span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-3 text-gray-500">
                    <button onClick={() => handleConfirm(r._id)} className="hover:text-green-600"><FaCheck /></button>
                    <button onClick={() => handleDelete(r._id)} className="hover:text-red-500"><FaTrash /></button>
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
