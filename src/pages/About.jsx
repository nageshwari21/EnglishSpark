import { motion } from 'framer-motion'
import { FaBullseye, FaEye } from 'react-icons/fa'
import TrainerCard from '../components/TrainerCard'
import { TRAINERS } from '../utils/constants'

const ACHIEVEMENTS = [
  { value: '5000+', label: 'Happy Students' },
  { value: '50+', label: 'Expert Trainers' },
  { value: '100+', label: 'Courses' },
  { value: '10+', label: 'Years of Excellence' },
]

export default function About() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">About Us</h1>
          <p className="mt-1 text-sm text-blue-100">Home / About Us</p>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">Our Story</span>
          <h2 className="mt-2 text-2xl font-bold text-primary">Helping India speak with confidence</h2>
          <p className="mt-4 text-gray-600">
            EnglishSpark was founded with a simple mission: to empower every learner to speak English confidently and achieve their goals.
          </p>
          <p className="mt-4 text-gray-600">
            We believe communication is the key to success in today's world. Our trainers and well-structured courses are designed to make learning practical, engaging, and effective.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img
            src="/images/about-story.jpg"
            alt="Students learning together"
            className="h-full w-full rounded-xl object-cover shadow-card"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/F5F7FB/0B2E83?text=EnglishSpark' }}
          />
        </motion.div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:px-8">
          <div className="card p-8">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><FaBullseye size={20} /></span>
            <h3 className="text-lg font-semibold text-primary">Our Mission</h3>
            <p className="mt-2 text-sm text-gray-600">To empower learners with strong English communication skills.</p>
          </div>
          <div className="card p-8">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><FaEye size={20} /></span>
            <h3 className="text-lg font-semibold text-primary">Our Vision</h3>
            <p className="mt-2 text-sm text-gray-600">To become the most trusted English learning platform worldwide.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-primary">Our Achievements</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="text-center">
              <p className="text-3xl font-extrabold text-accent">{a.value}</p>
              <p className="mt-1 text-sm text-gray-500">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary">Trainer Team</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {TRAINERS.slice(0, 4).map((t) => <TrainerCard key={t._id} trainer={t} />)}
          </div>
        </div>
      </section>
    </>
  )
}
