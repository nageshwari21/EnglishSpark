import TestimonialCard from '../components/TestimonialCard'
import { TESTIMONIALS } from '../utils/constants'

export default function Testimonials() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Testimonials</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Testimonials</p>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t._id} testimonial={t} />)}
        </div>
      </section>
    </>
  )
}
