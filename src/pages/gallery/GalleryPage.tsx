import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import doorwayImg from '../../assets/Doorway 4.jpg'
import floatingImg from '../../assets/Floating 2.jpg'
import finishImg from '../../assets/Floating Picture.jpg'
import roomImg from '../../assets/Room 3.jpg'
import './GalleryPage.css'

type GalleryItem = {
  src: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  { src: doorwayImg, alt: 'Drywall project image 1' },
  { src: floatingImg, alt: 'Drywall project image 2' },
  { src: finishImg, alt: 'Drywall project image 3' },
  { src: roomImg, alt: 'Drywall project image 4' },
  { src: floatingImg, alt: 'Drywall project image 5' },
  { src: doorwayImg, alt: 'Drywall project image 6' },
  { src: roomImg, alt: 'Drywall project image 7' },
  { src: finishImg, alt: 'Drywall project image 8' },
  { src: doorwayImg, alt: 'Drywall project image 9' },
  { src: roomImg, alt: 'Drywall project image 10' },
  { src: finishImg, alt: 'Drywall project image 11' },
  { src: floatingImg, alt: 'Drywall project image 12' },
]

const ITEMS_PER_PAGE = 8

export function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [carouselCenterIndex, setCarouselCenterIndex] = useState(0)

  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE)

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return galleryItems.slice(start, start + ITEMS_PER_PAGE)
  }, [currentPage])

  const openLightbox = (indexOnPage: number) => {
    const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + indexOnPage
    setLightboxIndex(globalIndex)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const showNext = () => {
    if (lightboxIndex === null) {
      return
    }
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length)
  }

  const showPrev = () => {
    if (lightboxIndex === null) {
      return
    }
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)
  }

  const rotateCarouselNext = () => {
    setCarouselCenterIndex((current) => (current + 1) % galleryItems.length)
  }

  const rotateCarouselPrev = () => {
    setCarouselCenterIndex(
      (current) => (current - 1 + galleryItems.length) % galleryItems.length,
    )
  }

  const carouselSlots = [-2, -1, 0, 1, 2].map((offset) => {
    const index =
      (carouselCenterIndex + offset + galleryItems.length) % galleryItems.length
    return {
      ...galleryItems[index],
      index,
      offset,
    }
  })

  return (
    <section className="gallery-page" aria-label="Gallery page">
      <header className="gallery-page__top">
        <div className="gallery-page__top-inner">
          <div className="gallery-page__circle-wrap" aria-hidden="true">
            <svg viewBox="0 0 260 260" className="gallery-page__circle-text">
              <defs>
                <path
                  id="gallery-circle-path"
                  d="M130,130 m-102,0 a102,102 0 1,1 204,0 a102,102 0 1,1 -204,0"
                />
              </defs>
              <text>
                <textPath href="#gallery-circle-path" startOffset="0%">
                  • OUR GALLERY • OUR GALLERY • OUR GALLERY • OUR GALLERY • OUR GALLERY • OUR GALLERY •
                </textPath>
              </text>
            </svg>
          </div>

          <div className="gallery-page__heading-wrap">
            <h1>Our Gallery</h1>
            <p>
              Browse our drywall portfolio to see the detail, consistency, and
              craftsmanship behind every project.
            </p>
            <Link to="/contact" className="gallery-page__cta">
              Get Free Quote
            </Link>
          </div>
        </div>
      </header>

      <section className="gallery-page__semi" aria-label="Featured rotating gallery">
        <div className="gallery-page__semi-inner">
          <div className="gallery-page__semi-track" aria-live="polite">
            <button
              type="button"
              className="gallery-page__semi-arrow gallery-page__semi-arrow--left"
              onClick={rotateCarouselPrev}
              aria-label="Rotate gallery left"
            >
              &lt;
            </button>

            {carouselSlots.map((slot) => (
              <button
                key={`${slot.alt}-${slot.offset}`}
                type="button"
                className={`gallery-page__semi-item gallery-page__semi-item--offset-${slot.offset}`}
                onClick={() => setLightboxIndex(slot.index)}
                aria-label={`Open ${slot.alt}`}
              >
                <img src={slot.src} alt={slot.alt} />
                <span className="gallery-page__semi-overlay" aria-hidden="true">
                  <span className="gallery-page__semi-eye">&#128065;</span>
                </span>
              </button>
            ))}

            <button
              type="button"
              className="gallery-page__semi-arrow gallery-page__semi-arrow--right"
              onClick={rotateCarouselNext}
              aria-label="Rotate gallery right"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      <div className="gallery-page__grid-wrap">
        <div className="gallery-page__grid">
          {pageItems.map((item, index) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              className="gallery-page__tile"
              onClick={() => openLightbox(index)}
              aria-label={`Open ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} />
              <span className="gallery-page__tile-overlay" aria-hidden="true">
                <span className="gallery-page__eye">&#128065;</span>
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-page__pagination">
          <button
            type="button"
            className="gallery-page__page-btn"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              className={`gallery-page__page-btn${currentPage === pageNumber ? ' is-active' : ''}`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          <button
            type="button"
            className="gallery-page__page-btn"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="gallery-page__lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="gallery-page__lightbox-backdrop"
            onClick={closeLightbox}
            aria-label="Close gallery"
          />

          <div className="gallery-page__lightbox-content">
            <button
              type="button"
              className="gallery-page__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              X
            </button>

            <button
              type="button"
              className="gallery-page__lightbox-arrow gallery-page__lightbox-arrow--left"
              onClick={showPrev}
              aria-label="Previous image"
            >
              &lt;
            </button>

            <img
              className="gallery-page__lightbox-image"
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
            />

            <button
              type="button"
              className="gallery-page__lightbox-arrow gallery-page__lightbox-arrow--right"
              onClick={showNext}
              aria-label="Next image"
            >
              &gt;
            </button>

            <p className="gallery-page__lightbox-count">
              {lightboxIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
