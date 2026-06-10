# Mark Moawad — Photography Portfolio

A minimal, cinematic photography portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Geist Sans + Cormorant Garamond |
| Theme | next-themes (dark-first) |
| Icons | lucide-react |

---

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Updating Your Content

**Everything you need to change lives in one file:**

```
lib/portfolio-data.ts
```

### Change personal details
```ts
export const siteConfig = {
  name: 'Your Name',
  tagline: 'Your Title',
  email: 'you@yourdomain.com',
  location: 'Your City',
  heroImage: '/images/...',   // path to your hero image
  aboutImage: '/images/...',  // path to your about page image
  bio: ['First paragraph...', 'Second paragraph...'],
  stats: [...],
  clients: [...],
}
```

### Add/remove portfolio images
Each entry in `portfolioImages` follows this shape:
```ts
{
  id: 'unique-id',
  src: '/images/your-folder/your-file.jpg',
  alt: 'Descriptive alt text',
  title: 'Image Title',
  location: 'City, Country',          // optional
  category: 'portrait' | 'landscape' | 'travel' | 'street',
  featured: false,                    // set true to appear on home page (keep to 3 max)
}
```

### Add a new category
1. Add the new value to the `category` union type in `PortfolioImage`
2. Add an entry to the `categories` array at the bottom of the file

---

## Swapping Images

All images live in `public/images/`. The folder structure mirrors the categories:

```
public/images/
  landmarks/banff/
  landmarks/egypt/
  landmarks/london/
  landmarks/spain/
  grad-shoots/
  nyc/
```

**Export settings for best results:**
- Hero image: 2560×1440px minimum, JPEG quality 85
- Portrait photos: 1200px on longest edge, quality 85
- Landscape photos: 1600px on longest edge, quality 85

After adding new images, update the `src` paths in `lib/portfolio-data.ts`.

---

## Deploying to Vercel

1. Push this folder to a GitHub repo
2. Import the repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no config needed
4. Update `metadataBase` in `app/layout.tsx` with your production domain

```ts
metadataBase: new URL('https://yourdomain.com'),
```

---

## Connecting a Contact Form

The `ContactForm` component currently logs to console. To receive real emails, replace the `handleSubmit` stub in `components/ContactForm.tsx` with a call to:

- **[Resend](https://resend.com)** — simplest for transactional email
- **[Formspree](https://formspree.io)** — zero-backend form handling
- A Next.js Route Handler at `app/api/contact/route.ts`
