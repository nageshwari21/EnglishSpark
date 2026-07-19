import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <h1 className="text-2xl font-bold text-primary">Welcome, {user?.name}</h1>
      <p className="mt-2 text-gray-500">This is your student dashboard.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="card p-6">
          <p className="text-sm text-gray-500">Enrolled Courses</p>
          <p className="mt-2 text-2xl font-bold text-primary">0</p>
        </div>
        <div className="card p-6">
          <p className="text-sm text-gray-500">Demo Requests</p>
          <p className="mt-2 text-2xl font-bold text-primary">0</p>
        </div>
        <div className="card p-6">
          <p className="text-sm text-gray-500">Certificates Earned</p>
          <p className="mt-2 text-2xl font-bold text-primary">0</p>
        </div>
      </div>
    </div>
  )
}
