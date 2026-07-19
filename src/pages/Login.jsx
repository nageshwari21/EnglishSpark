import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const user = await login(form.email, form.password)
      navigate(user.role === 'admin' ? '/admin' : '/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password.')
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
          <h1 className="text-xl font-bold text-primary">Welcome Back!</h1>
          <p className="text-sm text-gray-500">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Email Address</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className="input-field" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="mb-1 block text-xs font-medium text-gray-600">Password</label>
              <Link to="/contact" className="text-xs font-medium text-accent">Forgot Password?</Link>
            </div>
            <input required type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" className="input-field" />
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-600">
            <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} /> Remember Me
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="font-semibold text-accent">Register</Link>
        </p>
      </div>
    </div>
  )
}
