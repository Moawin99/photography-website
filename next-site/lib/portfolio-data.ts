// ✦ All site content lives here. Swap images, update copy, reorder freely.

export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

export interface Collection {
  id: string
  title: string
  location?: string
  photos: Photo[]
}

// ─── Site config ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Mark Moawad',
  tagline: 'Photographer & Videographer — New York',
  email: 'moflickz99@gmail.com',
  instagram: 'https://instagram.com/moflickz',
  bio: [
    "I'm a photographer and videographer based in New York, drawn to the quiet tension between stillness and movement. My work spans editorial portraiture, landscape, and documentary — each frame a pursuit of the moment that most cameras miss.",
    "Whether in the Banff Canada at dawn or the streets of Cairo at dusk, I seek images that hold their breath.",
  ],
}

// ─── Collections ─────────────────────────────────────────────────────────────
// ✦ Source photos live in ../photos/. Run `npm run sync-photos` to refresh public/images and this file.
export const collections: Collection[] = [
  {
    id: 'banff',
    title: 'Banff',
    location: 'Canada',
    photos: [
      { src: '/images/landmarks/banff/banff-00807.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00368.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00371.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00711.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00736.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00692.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00740.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00833.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-00847.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-01180.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-01268.jpg', alt: 'Banff', width: 2700, height: 1519 },
      { src: '/images/landmarks/banff/banff-00817.jpg', alt: 'Banff', width: 2700, height: 1519 },
      { src: '/images/landmarks/banff/banff-01231.jpg', alt: 'Banff', width: 2160, height: 2700 },
      { src: '/images/landmarks/banff/banff-01201.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-01184.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-01269.jpg', alt: 'Banff', width: 1800, height: 2700 },
      { src: '/images/landmarks/banff/banff-01310.jpg', alt: 'Banff', width: 1800, height: 2700 },
    ],
  },
  {
    id: 'egypt',
    title: 'Egypt',
    photos: [
      { src: '/images/landmarks/egypt/egypt-07865.jpg', alt: 'Egypt', width: 2160, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07680.jpg', alt: 'Egypt', width: 2025, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07692.jpg', alt: 'Egypt', width: 2025, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07859.jpg', alt: 'Egypt', width: 2160, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07696.jpg', alt: 'Egypt', width: 2025, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07731.jpg', alt: 'Egypt', width: 2025, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07856.jpg', alt: 'Egypt', width: 2160, height: 2700 },
      { src: '/images/landmarks/egypt/egypt-07744.jpg', alt: 'Egypt', width: 2700, height: 2025 },
      { src: '/images/landmarks/egypt/egypt-07806.jpg', alt: 'Egypt', width: 2700, height: 1519 },
      { src: '/images/landmarks/egypt/egypt-07863.jpg', alt: 'Egypt', width: 2160, height: 2700 },
    ],
  },
  {
    id: 'italy',
    title: 'Italy',
    photos: [
      { src: '/images/landmarks/italy/italy-06554.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06569.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06573.jpg', alt: 'Italy', width: 2160, height: 2700 },
      { src: '/images/landmarks/italy/italy-06593.jpg', alt: 'Italy', width: 1519, height: 2700 },
      { src: '/images/landmarks/italy/italy-06602.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06607.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06612.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06617.jpg', alt: 'Italy', width: 2160, height: 2700 },
      { src: '/images/landmarks/italy/italy-06626.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06686.jpg', alt: 'Italy', width: 2160, height: 2700 },
      { src: '/images/landmarks/italy/italy-06730.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06742.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06767.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06777.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-06874.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07036.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07158.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07185.jpg', alt: 'Italy', width: 1800, height: 2700 },
      { src: '/images/landmarks/italy/italy-07233.jpg', alt: 'Italy', width: 2160, height: 2700 },
      { src: '/images/landmarks/italy/italy-07234.jpg', alt: 'Italy', width: 2700, height: 2160 },
      { src: '/images/landmarks/italy/italy-07325.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07420.jpg', alt: 'Italy', width: 1519, height: 2700 },
      { src: '/images/landmarks/italy/italy-07480.jpg', alt: 'Italy', width: 1519, height: 2700 },
      { src: '/images/landmarks/italy/italy-07487.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07511.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07525.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07526.jpg', alt: 'Italy', width: 2700, height: 1800 },
      { src: '/images/landmarks/italy/italy-07529.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07557.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07561.jpg', alt: 'Italy', width: 2025, height: 2700 },
      { src: '/images/landmarks/italy/italy-07605.jpg', alt: 'Italy', width: 2700, height: 2025 },
    ],
  },
  {
    id: 'portugal',
    title: 'Portugal',
    photos: [
      { src: '/images/landmarks/portugal/porto-06248.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06266.jpg', alt: 'Portugal', width: 2160, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06271.jpg', alt: 'Portugal', width: 2700, height: 2025 },
      { src: '/images/landmarks/portugal/porto-06276.jpg', alt: 'Portugal', width: 2160, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06351.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06392.jpg', alt: 'Portugal', width: 2160, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06398.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06405.jpg', alt: 'Portugal', width: 1519, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06409.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06434.jpg', alt: 'Portugal', width: 1519, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06450.jpg', alt: 'Portugal', width: 2160, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06451.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06472.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06505.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06506.jpg', alt: 'Portugal', width: 2025, height: 2700 },
      { src: '/images/landmarks/portugal/porto-06510.jpg', alt: 'Portugal', width: 2025, height: 2700 },
    ],
  },
  {
    id: 'nyc',
    title: 'New York',
    photos: [
      { src: '/images/landmarks/nyc/NYC-0030.jpg', alt: 'New York', width: 1801, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-0050.jpg', alt: 'New York', width: 1801, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-04334.jpg', alt: 'New York', width: 1688, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-04341.jpg', alt: 'New York', width: 2700, height: 1519 },
      { src: '/images/landmarks/nyc/NYC-04343.jpg', alt: 'New York', width: 1688, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-04385.jpg', alt: 'New York', width: 1800, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-04428.jpg', alt: 'New York', width: 1688, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-04453.jpg', alt: 'New York', width: 1519, height: 2700 },
      { src: '/images/landmarks/nyc/NYC-04462.jpg', alt: 'New York', width: 2160, height: 2700 },
    ],
  },
  {
    id: 'portraits',
    title: 'Portraits',
    photos: [
      { src: '/images/grad-shoots/MC-0103.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0107.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0109.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0118.jpg', alt: 'Portrait', width: 1801, height: 2700 },
      { src: '/images/grad-shoots/MC-0126.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0133.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0142.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0151.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0155.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0183.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0252.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0265.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0272.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/MC-0276.jpg', alt: 'Portrait', width: 1519, height: 2700 },
      { src: '/images/grad-shoots/MC-0307.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-.jpg', alt: 'Portrait', width: 2700, height: 2160 },
      { src: '/images/grad-shoots/val-0051.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0054.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0066.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0069.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0077.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0088.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0091.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0098.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0100.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0180.jpg', alt: 'Portrait', width: 1801, height: 2700 },
      { src: '/images/grad-shoots/val-0181.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0185.jpg', alt: 'Portrait', width: 1801, height: 2700 },
      { src: '/images/grad-shoots/val-0188.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0192.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0200.jpg', alt: 'Portrait', width: 2160, height: 2700 },
      { src: '/images/grad-shoots/val-0279.jpg', alt: 'Portrait', width: 2160, height: 2700 },
    ],
  }
]
