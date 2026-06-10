// Contact page
import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { siteConfig } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name}`,
}

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 pt-16 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Form */}
        <div>
          <h1 className="text-xs tracking-[0.12em] uppercase mb-10">Get in Touch</h1>
          <ContactForm />
        </div>

        {/* Details */}
        <div className="md:pt-10 space-y-6">
          <div>
            <p className="text-xs tracking-[0.1em] uppercase text-gray-400 mb-1">Email</p>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {siteConfig.email}
            </Link>
          </div>
          <div>
            <p className="text-xs tracking-[0.1em] uppercase text-gray-400 mb-1">Instagram</p>
            <Link
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              @markmoawad
            </Link>
          </div>
          <div>
            <p className="text-xs tracking-[0.1em] uppercase text-gray-400 mb-1">Based in</p>
            <p className="text-sm text-gray-600">New York, NY</p>
          </div>
          <p className="text-xs text-gray-400 leading-6 pt-2">
            Available for portrait, editorial,<br />
            landscape, and commercial projects.
          </p>
        </div>
      </div>
    </div>
  )
}
