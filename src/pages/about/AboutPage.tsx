import './AboutPage.css'

export function AboutPage() {
  return (
    <section className="about-page" aria-label="About and contact page">
      <div className="about-page__inner">
        <h1>Lemus Drywall</h1>
        <h2>Contact Us</h2>

        <div className="about-page__socials" aria-label="Social media links">
          <a href="#" aria-label="Facebook" className="about-page__social-link">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M13.5 22v-8.2h2.8l.42-3.3h-3.22V8.4c0-.95.27-1.6 1.63-1.6h1.74V3.84C16.53 3.8 15.38 3.7 14.04 3.7c-2.8 0-4.72 1.7-4.72 4.86v1.94H6.5v3.3h2.82V22h4.18z" />
            </svg>
          </a>

          <a href="#" aria-label="Instagram" className="about-page__social-link">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm8.35 1.8h-8.2A4 4 0 0 0 3.8 7.9v8.2a4 4 0 0 0 4.1 4.1h8.2a4 4 0 0 0 4.1-4.1V7.9a4 4 0 0 0-4.1-4.1zm-4.1 3.25A4.95 4.95 0 1 1 7.05 12 4.95 4.95 0 0 1 12 7.05zm0 1.8A3.15 3.15 0 1 0 15.15 12 3.15 3.15 0 0 0 12 8.85zm5.15-2.2a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15z" />
            </svg>
          </a>

          <a href="#" aria-label="Google" className="about-page__social-link">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M21.35 12.2c0-.72-.06-1.24-.2-1.78H12v3.35h5.36c-.11.84-.68 2.1-1.94 2.95l-.02.11 2.83 2.19.2.02c1.83-1.69 2.92-4.18 2.92-6.84z" />
              <path d="M12 21.7c2.63 0 4.84-.87 6.45-2.37l-3.01-2.33c-.8.56-1.88.95-3.44.95A5.86 5.86 0 0 1 6.46 14l-.1.01-2.95 2.28-.03.1A9.73 9.73 0 0 0 12 21.7z" />
              <path d="M6.46 14a5.98 5.98 0 0 1-.32-2c0-.69.11-1.35.31-1.99l-.01-.13-2.98-2.31-.1.05A9.7 9.7 0 0 0 2.3 12c0 1.56.37 3.04 1.06 4.38L6.46 14z" />
              <path d="M12 6.05c1.96 0 3.28.84 4.04 1.54l2.95-2.87C16.83 2.75 14.63 2 12 2a9.7 9.7 0 0 0-8.64 5.62l3.09 2.4A5.86 5.86 0 0 1 12 6.05z" />
            </svg>
          </a>
        </div>

        <form className="about-page__form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="(205) 000-0000" />
          </label>

          <label>
            Email Address
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Service
            <input type="text" name="service" placeholder="Service needed" />
          </label>

          <label className="about-page__message-field">
            Message
            <textarea name="message" rows={5} placeholder="Tell us about your project" />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
