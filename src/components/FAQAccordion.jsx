import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q} className="rounded-lg border border-gray-200 bg-white">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="text-sm font-medium text-primary">{item.q}</span>
              <span className="text-accent">{isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}</span>
            </button>
            {isOpen && (
              <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
