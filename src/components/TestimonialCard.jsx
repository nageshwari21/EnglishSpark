import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card p-6">
      <FaQuoteLeft className="mb-3 text-accent" size={20} />
      <p className="text-sm italic text-gray-600">"{testimonial.text}"</p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-1 text-yellow-500">
        {Array.from({ length: testimonial.rating }).map((_, i) => <FaStar key={i} size={12} />)}
      </div>
    </div>
  )
}
