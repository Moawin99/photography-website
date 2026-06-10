// Homepage — full photo archive, all collections
import Image from 'next/image'
import { collections } from '@/lib/portfolio-data'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 pt-10 pb-16">
      {collections.map((collection) => (
        <section key={collection.id} className="mb-16">
          {/* Collection label */}
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="text-xs tracking-[0.12em] uppercase text-black">
              {collection.title}
            </h2>
            {collection.location && (
              <span className="text-xs text-gray-400">{collection.location}</span>
            )}
          </div>

          {/* Masonry grid — natural aspect ratios */}
          <div className="columns-2 md:columns-3 gap-1">
            {collection.photos.map((photo) => (
              <div key={photo.src} className="break-inside-avoid mb-1">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
