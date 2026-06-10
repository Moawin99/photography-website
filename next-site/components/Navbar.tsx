// Minimal sticky navigation
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/portfolio-data'

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10 h-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs tracking-[0.12em] uppercase text-black hover:text-gray-400 transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop */}
          <nav className="hidden sm:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-[0.1em] uppercase transition-colors ${
                  pathname === href ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="sm:hidden text-xs tracking-[0.1em] uppercase text-gray-400"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 sm:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-2xl tracking-[0.08em] uppercase text-black"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
