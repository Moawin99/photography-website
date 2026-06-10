// About page
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'About',
  description: siteConfig.tagline,
}

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 pt-16 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Image */}
        <div>
          <Image
            src="/images/nyc/nyc-0030.jpg"
            alt={siteConfig.name}
            width={3303}
            height={4952}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="md:pt-4 space-y-8">
          <div>
            <h1 className="text-sm tracking-[0.1em] uppercase mb-1">{siteConfig.name}</h1>
            <p className="text-xs text-gray-400 tracking-[0.08em] uppercase">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.bio.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-7">
                {p}
              </p>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="block text-xs tracking-[0.08em] uppercase text-gray-400 hover:text-black transition-colors"
            >
              {siteConfig.email}
            </Link>
            <Link
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs tracking-[0.08em] uppercase text-gray-400 hover:text-black transition-colors"
            >
              Instagram
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-block text-xs tracking-[0.12em] uppercase border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
