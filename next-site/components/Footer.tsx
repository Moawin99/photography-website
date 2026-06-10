// Minimal footer
import Link from 'next/link'
import { siteConfig } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 h-12 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.08em] uppercase text-gray-400 hover:text-black transition-colors"
          >
            Instagram
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-xs tracking-[0.08em] uppercase text-gray-400 hover:text-black transition-colors"
          >
            {siteConfig.email}
          </Link>
        </div>
      </div>
    </footer>
  )
}
