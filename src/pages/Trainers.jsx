import TrainerCard from '../components/TrainerCard'
import { TRAINERS } from '../utils/constants'

export default function Trainers() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Our Trainers</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Trainers</p>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TRAINERS.map((t) => <TrainerCard key={t._id} trainer={t} />)}
        </div>
      </section>
    </>
  )
}
