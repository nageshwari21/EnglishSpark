import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCheckCircle, FaClock, FaSignal, FaGlobe, FaRupeeSign, FaStar } from 'react-icons/fa'
import { COURSES, TRAINERS } from '../utils/constants'

const TABS = ['Overview', 'Syllabus', 'Features', 'Trainer', 'Reviews']

export default function CourseDetails() {
  const { id } = useParams()
  const [tab, setTab] = useState('Overview')
  const course = COURSES.find((c) => c._id === id)
  const trainer = TRAINERS.find((t) => t._id === course?.trainer)

  if (!course) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <p className="text-lg text-gray-600">Course not found.</p>
        <Link to="/courses" className="mt-4 inline-block text-accent font-semibold">← Back to Courses</Link>
      </div>
    )
  }

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">{course.title} Course</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Courses / {course.title}</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="h-72 w-full rounded-xl object-cover shadow-card"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x450/0B2E83/FFFFFF?text=' + encodeURIComponent(course.title) }}
            />

            <div className="mt-8 flex gap-2 overflow-x-auto border-b border-gray-200">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    tab === t ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:text-primary'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="py-6 text-sm text-gray-600">
              {tab === 'Overview' && (
                <>
                  <h3 className="mb-2 font-semibold text-primary">About This Course</h3>
                  <p>{course.description}</p>
                </>
              )}
              {tab === 'Syllabus' && (
                <ul className="space-y-2">
                  {course.curriculum.map((item) => (
                    <li key={item} className="flex items-center gap-2"><FaCheckCircle className="text-accent" /> {item}</li>
                  ))}
                </ul>
              )}
              {tab === 'Features' && (
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-accent" /> Daily conversation practice</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-accent" /> Correct pronunciation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-accent" /> Improve vocabulary</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-accent" /> Grammar for speaking</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-accent" /> Interview communication</li>
                </ul>
              )}
              {tab === 'Trainer' && trainer && (
                <div className="flex items-center gap-4">
                  <img src={trainer.image} alt={trainer.name} className="h-16 w-16 rounded-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/F5F7FB/0B2E83?text=' + trainer.name[0] }} />
                  <div>
                    <p className="font-semibold text-primary">{trainer.name}</p>
                    <p className="text-xs text-accent">{trainer.role}</p>
                    <p className="text-xs text-gray-500">{trainer.experience}</p>
                  </div>
                </div>
              )}
              {tab === 'Reviews' && <p>No reviews yet. Be the first to enroll and share your experience!</p>}
            </div>
          </div>

          <aside>
            <div className="card sticky top-24 p-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-500"><FaClock /> Duration</span><span className="font-semibold text-primary">{course.duration}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-500"><FaSignal /> Level</span><span className="font-semibold text-primary">{course.level}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-500"><FaGlobe /> Language</span><span className="font-semibold text-primary">{course.language}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-500"><FaRupeeSign /> Price</span><span className="font-semibold text-accent">₹{course.price.toLocaleString('en-IN')}</span></li>
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/demo-class" className="btn-primary">Book Free Demo</Link>
                <button className="btn-secondary">Enroll Now</button>
              </div>
              {trainer && (
                <div className="mt-6 border-t border-gray-100 pt-6 text-center">
                  <p className="mb-2 text-xs font-semibold uppercase text-gray-400">Trainer</p>
                  <img src={trainer.image} alt={trainer.name} className="mx-auto h-16 w-16 rounded-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/F5F7FB/0B2E83?text=' + trainer.name[0] }} />
                  <p className="mt-2 text-sm font-semibold text-primary">{trainer.name}</p>
                  <p className="flex items-center justify-center gap-1 text-xs text-yellow-500"><FaStar /> {trainer.rating}</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
