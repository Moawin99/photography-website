// Root layout
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/lib/portfolio-data'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://markmoawad.com'), // ✦ update to your domain
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description: siteConfig.tagline,
  openGraph: { type: 'website', siteName: siteConfig.name },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[family-name:var(--font-geist-sans)] min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
