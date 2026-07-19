import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center">
      <p className="text-6xl font-extrabold text-primary">404</p>
      <p className="mt-4 text-gray-600">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-8">Back to Home</Link>
    </div>
  )
}
