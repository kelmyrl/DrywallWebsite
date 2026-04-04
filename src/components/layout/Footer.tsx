import { Link } from 'react-router-dom'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <h2>Lemus Drywall</h2>
        </div>

        <div className="site-footer__column">
          <h3>Navigation</h3>
          <nav className="site-footer__nav" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="site-footer__column">
          <h3>Company Features</h3>
          <ul className="site-footer__features">
            <li>20+ year experience</li>
            <li>We accept cash, cards and checks</li>
            <li>Residential and commercial</li>
            <li>We offer free estimates</li>
            <li>We are bilingual</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <small>2026 lemus drywall. all rights reserved</small>
      </div>
    </footer>
  )
}
