import FAQAccordion from '../components/FAQAccordion'
import { FAQS } from '../utils/constants'

export default function FAQ() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h1>
          <p className="mt-1 text-sm text-blue-100">Home / FAQ</p>
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <FAQAccordion faqs={FAQS} />
      </section>
    </>
  )
}
