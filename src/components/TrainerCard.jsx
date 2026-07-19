import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default function TrainerCard({ trainer }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="card p-5 text-center">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="mx-auto h-24 w-24 rounded-full object-cover"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x200/F5F7FB/0B2E83?text=' + encodeURIComponent(trainer.name[0]) }}
      />
      <h3 className="mt-4 font-semibold text-primary">{trainer.name}</h3>
      <p className="text-xs text-accent">{trainer.role}</p>
      <p className="mt-1 text-xs text-gray-500">{trainer.experience} Experience</p>
      {trainer.rating && (
        <p className="mt-2 flex items-center justify-center gap-1 text-xs text-yellow-500">
          <FaStar /> {trainer.rating}
        </p>
      )}
    </motion.div>
  )
}
