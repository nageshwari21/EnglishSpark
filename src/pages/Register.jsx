import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

function getStrength(password) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
}

const STRENGTH_LABELS = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong']
const STRENGTH_COLORS = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500']

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '', agree: false })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const strength = useMemo(() => getStrength(form.password), [form.password])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!form.agree) {
      setError('Please accept the Terms & Conditions.')
      return
    }
    setLoading(true)
    try {
      const user = await register({ name: form.name, email: form.email, phone: form.phone, password: form.password })
      navigate(user.role === 'admin' ? '/admin' : '/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-surface px-4 py-16">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-card">
        <div className="mb-6 text-center">
          <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <FaBookOpen size={20} />
          </span>
          <h1 className="text-xl font-bold text-primary">Create Account</h1>
          <p className="text-sm text-gray-500">Register to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Full Name</label>
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="input-field" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Email Address</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className="input-field" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Phone Number</label>
            <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" className="input-field" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Password</label>
            <input required type="password" name="password" value={form.password} onChange={handleChange} placeholder="Create a password" className="input-field" />
            {form.password && (
              <div className="mt-2">
                <div className="flex h-1.5 gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className={`flex-1 rounded-full ${i < strength ? STRENGTH_COLORS[strength] : 'bg-gray-200'}`} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-gray-500">{STRENGTH_LABELS[strength]}</p>
              </div>
            )}
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Confirm Password</label>
            <input required type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm your password" className="input-field" />
          </div>
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mt-0.5" />
            I agree to the Terms & Conditions
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="font-semibold text-accent">Login</Link>
        </p>
      </div>
    </div>
  )
}
