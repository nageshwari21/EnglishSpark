import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Contact Us</h1>
          <p className="mt-1 text-sm text-blue-100">Home / Contact Us</p>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 font-semibold text-primary">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-accent" /> 123, Education Street, Pune, Maharashtra - 411001</li>
            <li className="flex items-center gap-3"><FaPhoneAlt className="text-accent" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-accent" /> info@englishspark.com</li>
            <li className="flex items-start gap-3"><FaClock className="mt-1 shrink-0 text-accent" /> Mon - Sat: 9:00 AM - 7:00 PM</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"><FaFacebookF size={14} /></a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"><FaInstagram size={14} /></a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"><FaLinkedinIn size={14} /></a>
          </div>
        </div>

        <div className="card p-6 lg:col-span-1">
          <ContactForm />
        </div>

        <div className="overflow-hidden rounded-xl shadow-card lg:col-span-1">
          <iframe
            title="EnglishSpark Location"
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
