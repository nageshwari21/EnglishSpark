import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaBookOpen } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Courses' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/demo-class', label: 'Demo Class' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
            <FaBookOpen size={18} />
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight text-primary">
              English<span className="text-accent">Spark</span>
            </span>
            <span className="block text-[10px] font-medium tracking-wide text-gray-400">
              Speak Better. Think Better. Grow Better.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="btn-outline !px-4 !py-2 text-sm">
                Dashboard
              </Link>
              <button onClick={logout} className="btn-primary !px-4 !py-2 text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline !px-4 !py-2 text-sm">
                Login
              </Link>
              <Link to="/register" className="btn-primary !px-4 !py-2 text-sm">
                Register
              </Link>
            </>
          )}
        </div>

        <button className="text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-accent' : 'text-gray-700'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-2">
              {user ? (
                <button onClick={logout} className="btn-primary !px-4 !py-2 text-sm w-full">
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="btn-outline !px-4 !py-2 text-sm flex-1 text-center">
                    Login
                  </Link>
                  <Link to="/register" className="btn-primary !px-4 !py-2 text-sm flex-1 text-center">
                    Register
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
