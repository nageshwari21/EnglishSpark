import { useState } from 'react'
import api from '../services/api'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      await api.post('/contact', form)
      setStatus({ state: 'success', message: 'Message sent! We will get back to you soon.' })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', message: err.response?.data?.message || 'Something went wrong. Please try again.' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="input-field" />
        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="input-field" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="input-field" />
        <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="input-field" />
      </div>
      <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} className="input-field" />
      <button type="submit" disabled={status.state === 'loading'} className="btn-primary w-full sm:w-auto">
        {status.state === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status.message && (
        <p className={`text-sm ${status.state === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
      )}
    </form>
  )
}
