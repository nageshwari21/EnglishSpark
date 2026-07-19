import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { FaBookOpen, FaTachometerAlt, FaGraduationCap, FaChalkboardTeacher, FaBlog, FaUserGraduate, FaCalendarCheck, FaEnvelopeOpenText, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const NAV = [
  { to: '/admin', label: 'Dashboard', icon: FaTachometerAlt, end: true },
  { to: '/admin/courses', label: 'Courses', icon: FaGraduationCap },
  { to: '/admin/trainers', label: 'Trainers', icon: FaChalkboardTeacher },
  { to: '/admin/blogs', label: 'Blogs', icon: FaBlog },
  { to: '/admin/students', label: 'Students', icon: FaUserGraduate },
  { to: '/admin/demo-requests', label: 'Demo Requests', icon: FaCalendarCheck },
  { to: '/admin/messages', label: 'Messages', icon: FaEnvelopeOpenText },
]

export default function AdminLayout() {
  const [open, setOpen] = useState(false)
  const { logout, user } = useAuth()

  return (
    <div className="flex min-h-screen bg-surface">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-primary text-white transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary"><FaBookOpen size={16} /></span>
          <span className="text-lg font-bold">English<span className="text-accent">Spark</span></span>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-blue-100 hover:bg-white/10'
                }`
              }
            >
              <item.icon size={16} /> {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full border-t border-white/10 p-4">
          <button onClick={logout} className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm font-medium text-blue-100 hover:bg-white/10">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between bg-white px-4 py-4 shadow-sm lg:px-8">
          <button className="text-primary lg:hidden" onClick={() => setOpen(!open)}>{open ? <FaTimes size={20} /> : <FaBars size={20} />}</button>
          <h1 className="text-lg font-semibold text-primary">Admin Panel</h1>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-gray-500 sm:inline">{user?.name}</span>
            <Link to="/" className="text-sm font-medium text-accent">View Site</Link>
          </div>
        </header>
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
