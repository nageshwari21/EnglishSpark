import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBookOpen, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Courses' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const COURSE_LINKS = [
  'Spoken English', 'Basic English', 'Advanced English', 'IELTS Preparation',
  'PTE Preparation', 'Interview Preparation', 'Personality Development', 'Corporate English',
]

const SUPPORT_LINKS = [
  { to: '/faq', label: 'FAQ' },
  { to: '/demo-class', label: 'Demo Class' },
  { to: '/contact', label: 'Privacy Policy' },
  { to: '/contact', label: 'Terms & Conditions' },
  { to: '/contact', label: 'Refund Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary">
              <FaBookOpen size={18} />
            </span>
            <span className="text-lg font-bold">
              English<span className="text-accent">Spark</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-blue-100">
            EnglishSpark is a leading English speaking academy helping students speak fluently and communicate confidently.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent"><FaFacebookF size={14} /></a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent"><FaInstagram size={14} /></a>
            <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent"><FaYoutube size={14} /></a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent"><FaLinkedinIn size={14} /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold">Courses</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            {COURSE_LINKS.map((c) => (
              <li key={c}><Link to="/courses" className="hover:text-accent">{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold">Support</h4>
          <ul className="mb-6 space-y-2 text-sm text-blue-100">
            {SUPPORT_LINKS.map((l) => (
              <li key={l.label}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
          <h4 className="mb-3 text-base font-semibold">Contact Us</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 shrink-0" /> 123, Education Street, Pune, Maharashtra - 411001</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@englishspark.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} EnglishSpark. All Rights Reserved.
      </div>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </footer>
  )
}
