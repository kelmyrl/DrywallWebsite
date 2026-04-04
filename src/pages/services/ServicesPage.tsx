import { Link } from 'react-router-dom'
import './ServicesPage.css'

const staircaseVideo = new URL(
  '../../assets/Staircase Video 5.MP4',
  import.meta.url,
).href

export function ServicesPage() {
  return (
    <section className="services-page" aria-label="Our services">
      <video
        className="services-page__video"
        src={staircaseVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="services-page__overlay">
        <div className="services-page__inner">
          <header className="services-page__header">
            <h1>Our Services</h1>
            <p>
              We provide complete drywall solutions with reliable workmanship,
              clean execution, and finishes that are ready for long-term use.
            </p>
          </header>

          <div className="services-page__grid">
            <article className="services-page__card">
              <h2>General Drywall Services</h2>
              <p>
                Full drywall support for repairs, remodels, and new projects
                with dependable scheduling and consistent quality work.
              </p>
              <Link to="/contact" className="services-page__quote">Get free quote</Link>
            </article>
            <article className="services-page__card">
              <h2>Hanging Sheetrock</h2>
              <p>
                Accurate sheetrock installation with strong fastening and clean
                panel layout for long-lasting wall and ceiling performance.
              </p>
              <Link to="/contact" className="services-page__quote">Get free quote</Link>
            </article>
            <article className="services-page__card">
              <h2>Finishing</h2>
              <p>
                Professional taping, mudding, and smoothing for uniform seams
                and clean surfaces that are ready for final detailing.
              </p>
              <Link to="/contact" className="services-page__quote">Get free quote</Link>
            </article>
            <article className="services-page__card">
              <h2>Sanding</h2>
              <p>
                Careful sanding to level 4 and level 5 standards, delivering a
                smooth finish that is prepared for quality paint results.
              </p>
              <Link to="/contact" className="services-page__quote">Get free quote</Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
