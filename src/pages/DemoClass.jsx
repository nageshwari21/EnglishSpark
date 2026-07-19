import { useState } from 'react'
import { FaCheckCircle, FaHeadset } from 'react-icons/fa'
import api from '../services/api'
import { COURSES } from '../utils/constants'

const initial = { name: '', email: '', phone: '', course: '', date: '', time: '' }

export default function DemoClass() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      await api.post('/demo-requests', form)
      setStatus({ state: 'success', message: 'Your demo class is booked! A confirmation email is on its way.' })
      setForm(initial)
    } catch (err) {
      setStatus({ state: 'error', message: err.response?.data?.message || 'Something went wrong. Please try again.' })
    }
  }

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Book a Free Demo Class</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Demo Class</p>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-3 lg:px-8">
        <form onSubmit={handleSubmit} className="card space-y-4 p-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="input-field" />
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="input-field" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="input-field" />
            <select required name="course" value={form.course} onChange={handleChange} className="input-field">
              <option value="">Select a course</option>
              {COURSES.map((c) => <option key={c._id} value={c.title}>{c.title}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required type="date" name="date" value={form.date} onChange={handleChange} className="input-field" />
            <input required type="time" name="time" value={form.time} onChange={handleChange} className="input-field" />
          </div>
          <button type="submit" disabled={status.state === 'loading'} className="btn-primary w-full sm:w-auto">
            {status.state === 'loading' ? 'Booking...' : 'Book Free Demo'}
          </button>
          {status.message && (
            <p className={`text-sm ${status.state === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
          )}
        </form>

        <div className="card bg-primary p-6 text-white">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><FaHeadset size={20} /></span>
          <h3 className="text-lg font-semibold">Why Attend a Demo Class?</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-accent" /> Experience our teaching style</li>
            <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-accent" /> Interact with expert trainers</li>
            <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-accent" /> Understand course structure</li>
            <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-accent" /> Get your doubts cleared</li>
            <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-accent" /> 100% Free - no hidden charges</li>
          </ul>
        </div>
      </section>
    </>
  )
}
