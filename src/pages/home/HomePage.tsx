
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LandingHero from '../../assets/Doorway 4WEBPResized.webp'
import GallerySlide1 from '../../assets/Room 3WEBP.webp'
import GallerySlide2 from '../../assets/Floating 2.jpg'
import GallerySlide3 from '../../assets/Doorway6WEBPResized.webp'
import GallerySlide4 from '../../assets/Window7WEBPResized.webp'
import GallerySlide5 from '../../assets/Window8WEBP.webp'
import GallerySlide6 from '../../assets/Room9WEBP.webp'
import GallerySlide7 from '../../assets/Livingroom10WEBP.webp'
import GallerySlide8 from '../../assets/Hallway11WEBP.webp'
import GallerySlide9 from '../../assets/CurvedWindow12WEBP.webp'
import GallerySlide10 from '../../assets/CurvedWindowWEBPResized.webp'
import './Homepage.css'

const gallerySlides = [
  { src: LandingHero, alt: 'Drywall project gallery slide 1' },
  { src: GallerySlide1, alt: 'Drywall project gallery slide 2' },
  { src: GallerySlide2, alt: 'Drywall project gallery slide 3' },
  { src: GallerySlide3, alt: 'Drywall project gallery slide 3' },
  { src: GallerySlide4, alt: 'Drywall project gallery slide 4' },
  { src: GallerySlide5, alt: 'Drywall project gallery slide 5' },
  { src: GallerySlide6, alt: 'Drywall project gallery slide 6' },
  { src: GallerySlide7, alt: 'Drywall project gallery slide 7' },
  { src: GallerySlide8, alt: 'Drywall project gallery slide 8' },
  { src: GallerySlide9, alt: 'Drywall project gallery slide 9' },
  { src: GallerySlide10, alt: 'Drywall project gallery slide 10' },
]

export function HomePage() {
 
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % gallerySlides.length)
    }, 3000)

    return () => {
      window.clearInterval(timerId)
    }
  }, [])

  useEffect(() => {
    document.body.classList.add('home-page-active')

    return () => {
      document.body.classList.remove('home-page-active')
    }
  }, [])


  return (
    <div className="home-page">
      <section className="home-hero" aria-label="Lemus Drywall hero panel">
        <img
          className="home-hero__image"
          src={LandingHero}
          alt="Drywall craftsmanship"
          decoding="sync"
          loading="eager"
        />

        <div className="home-hero__overlay">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">Trusted Drywall Professionals</p>
            <h1 className="home-hero__title">Lemus Drywall</h1>
            <p className="home-hero__summary">
              With 20+ years of drywall experience, we are committed to quality
              craftsmanship, clean finishes, and dependable service on every
              project.
            </p>

            <div className="home-hero__actions">
              <Link to="/contact" className="home-hero__button home-hero__button--primary">
                Get Free Quote
              </Link>
              <a
                className="home-hero__button home-hero__button--secondary"
                href="tel:+12052835068"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about" aria-label="About our company">
        <div className="home-about__inner">
          <div className="home-about__left">
            <h2 className="home-about__title">About Our Company</h2>
            <p>
              Lemus Drywall is owned and led by Jose Lemus, with over 20 years
              of hands-on experience delivering dependable drywall craftsmanship
              and consistent quality.
            </p>
            <p>
              We are based in Birmingham, Alabama, and proudly serve homeowners,
              contractors, and property managers throughout Jefferson, Shelby,
              Tuscaloosa, Chilton, Cullman, Talladega, Bibb, Coosa, and St.
              Clair County, plus surrounding areas across Alabama.
            </p>
            <p>
              We specialize in general drywall services, hanging sheetrock,
              finish taping and floating, and sanding to level 4 and level 5
              finishes.
            </p>
            <p>
              We offer free consultations, and we are ready to talk through your
              project.
            </p>

            <a className="home-about__call" href="tel:+12052835068">
              Call Us: (205) 283-5068
            </a>
          </div>

          <div className="home-about__right">
            <div className="home-about__owner-photo-wrap">
              <img
                className="home-about__owner-photo"
                src={LandingHero}
                alt="Owner Jose Lemus"
                decoding="sync"
                loading="lazy"
              />
            </div>
            <p className="home-about__owner-summary">
              Jose Lemus leads every project with hands-on oversight, clear
              communication, and a commitment to delivering clean drywall
              finishes that homeowners and builders can trust.
            </p>
          </div>
        </div>
      </section>

      <section className="home-services" aria-label="Our services panel">
        <div className="home-services__grid">
          <article className="home-services__card home-services__card--sheetrock">
            <h3 className="home-services__title">Hanging Sheetrock</h3>
            <p className="home-services__text">
              We install sheetrock with precise measurements, secure fastening,
              and clean alignment so every wall and ceiling is built strong and
              ready for long-term durability.
            </p>
            <Link to="/services" className="home-services__arrow" aria-label="Learn more about hanging sheetrock">
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="home-services__card home-services__card--finish">
            <h3 className="home-services__title">Finish and Taping</h3>
            <p className="home-services__text">
              Our finish and taping process creates smooth seams and consistent
              surfaces, reducing visible lines and delivering a professional look
              in every room.
            </p>
            <Link to="/services" className="home-services__arrow" aria-label="Learn more about finish and taping">
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="home-services__card home-services__card--sanding">
            <h3 className="home-services__title">Sanding Ready for Paint</h3>
            <p className="home-services__text">
              We sand to level 4 and level 5 quality standards, leaving your
              drywall paint-ready with a clean, even finish that helps final
              coats look their best.
            </p>
            <Link to="/services" className="home-services__arrow" aria-label="Learn more about sanding ready for paint">
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="home-gallery" aria-label="Our gallery panel">
        <div className="home-gallery__inner">
          <div className="home-gallery__left">
            <h2 className="home-gallery__title">Our Gallery</h2>
            <p className="home-gallery__text">
              Explore our recent drywall projects to see the level of finish,
              detail, and clean craftsmanship we deliver for homes and
              commercial spaces across Alabama.
            </p>
            <Link to="/gallery" className="home-gallery__button">
              See Our Gallery
            </Link>
          </div>

          <div className="home-gallery__right">
            <div className="home-gallery__carousel">
              

              <img
                className="home-gallery__image"
                src={gallerySlides[activeSlideIndex].src}
                alt={gallerySlides[activeSlideIndex].alt}
                decoding="sync"
                loading="lazy"
              />
               
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact-bridge" aria-label="Contact details highlight">
        <div className="home-contact-bridge__box">
          <article className="home-contact-bridge__item">
            <span className="home-contact-bridge__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </span>
            <div>
              <p className="home-contact-bridge__label">Location</p>
              <p className="home-contact-bridge__value">Birmingham, Alabama</p>
            </div>
          </article>

          <article className="home-contact-bridge__item">
            <span className="home-contact-bridge__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3-8 5L4 7V6l8 5 8-5v1z" />
              </svg>
            </span>
            <div>
              <p className="home-contact-bridge__label">Email Us</p>
              <p className="home-contact-bridge__value">betykelmi@gmail.com</p>
            </div>
          </article>

          <article className="home-contact-bridge__item">
            <span className="home-contact-bridge__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M6.62 10.79a15.03 15.03 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.28.55 3.49.55a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.19 2.39.55 3.49a1 1 0 0 1-.24 1l-2.19 2.3z" />
              </svg>
            </span>
            <div>
              <p className="home-contact-bridge__label">Call Us</p>
              <p className="home-contact-bridge__value">(205) 283-5068</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
