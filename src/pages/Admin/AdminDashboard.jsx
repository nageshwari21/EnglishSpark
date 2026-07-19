import { FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaCalendarCheck } from 'react-icons/fa'
import { COURSES, TRAINERS } from '../../utils/constants'

const CARDS = [
  { icon: FaGraduationCap, label: 'Total Courses', value: COURSES.length },
  { icon: FaChalkboardTeacher, label: 'Total Trainers', value: TRAINERS.length },
  { icon: FaUserGraduate, label: 'Total Students', value: 5000 },
  { icon: FaCalendarCheck, label: 'Demo Requests', value: 128 },
]

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold text-primary">Dashboard Overview</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => (
          <div key={c.label} className="card flex items-center gap-4 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><c.icon size={20} /></span>
            <div>
              <p className="text-2xl font-bold text-primary">{c.value.toLocaleString('en-IN')}</p>
              <p className="text-xs text-gray-500">{c.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
