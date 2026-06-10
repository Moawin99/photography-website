// Simple contact form
'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // ✦ BACKEND: replace with Resend / Formspree / your API route
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <p className="text-sm text-gray-500">
        Message received — I&apos;ll be in touch soon.
      </p>
    )
  }

  const field = 'w-full border-0 border-b border-gray-200 pb-2 text-sm focus:outline-none focus:border-black placeholder:text-gray-300 transition-colors bg-transparent'
  const label = 'block text-xs tracking-[0.1em] uppercase text-gray-400 mb-2'

  return (
    <form onSubmit={submit} className="space-y-8">
      <div>
        <label className={label}>Name</label>
        <input name="name" required value={form.name} onChange={change} placeholder="Your name" className={field} />
      </div>
      <div>
        <label className={label}>Email</label>
        <input name="email" type="email" required value={form.email} onChange={change} placeholder="your@email.com" className={field} />
      </div>
      <div>
        <label className={label}>Message</label>
        <textarea name="message" required rows={4} value={form.message} onChange={change} placeholder="Tell me about your project" className={`${field} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="text-xs tracking-[0.12em] uppercase border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors disabled:opacity-40"
      >
        {loading ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
