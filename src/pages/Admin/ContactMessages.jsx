import { useState } from 'react'
import { FaTrash, FaEnvelopeOpen } from 'react-icons/fa'

const INITIAL = [
  { _id: 'm1', name: 'Sanjay Gupta', email: 'sanjay@example.com', subject: 'Course Fees', message: 'Can you share the fee structure for IELTS preparation?', date: '2026-07-15' },
  { _id: 'm2', name: 'Kavita Joshi', email: 'kavita@example.com', subject: 'Batch Timing', message: 'Do you have weekend batches available?', date: '2026-07-17' },
]

export default function ContactMessages() {
  const [messages, setMessages] = useState(INITIAL)
  const handleDelete = (id) => setMessages(messages.filter((m) => m._id !== id))

  return (
    <div>
      <h2 className="text-xl font-bold text-primary">Contact Messages</h2>
      <div className="mt-6 space-y-4">
        {messages.map((m) => (
          <div key={m._id} className="card p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><FaEnvelopeOpen size={14} /></span>
                <div>
                  <p className="font-semibold text-primary">{m.subject}</p>
                  <p className="text-xs text-gray-500">{m.name} • {m.email} • {m.date}</p>
                  <p className="mt-2 text-sm text-gray-600">{m.message}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(m._id)} className="text-gray-400 hover:text-red-500"><FaTrash /></button>
            </div>
          </div>
        ))}
        {messages.length === 0 && <p className="text-center text-gray-500">No messages yet.</p>}
      </div>
    </div>
  )
}
