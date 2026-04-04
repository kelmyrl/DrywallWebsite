import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
import './Navbar.css'

const getNavClassName = ({ isActive }: NavLinkRenderProps) =>
  `nav-link${isActive ? ' active' : ''}`

const businessPhoneDisplay = '(205) 283-5068'
const businessPhoneLink = '+2052835068'

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [useMobileNav, setUseMobileNav] = useState(false)
	const navInnerRef = useRef<HTMLDivElement | null>(null)
	const brandRef = useRef<HTMLAnchorElement | null>(null)
	const desktopRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const measure = () => {
			const navInner = navInnerRef.current
			const brand = brandRef.current
			const desktop = desktopRef.current

			if (!navInner || !brand || !desktop) {
				return
			}

			const gapAllowance = 36
			const requiredWidth = brand.scrollWidth + desktop.scrollWidth + gapAllowance
			setUseMobileNav(requiredWidth > navInner.clientWidth)
		}

		measure()

		const resizeObserver = new ResizeObserver(() => {
			measure()
		})

		if (navInnerRef.current) {
			resizeObserver.observe(navInnerRef.current)
		}

		if (desktopRef.current) {
			resizeObserver.observe(desktopRef.current)
		}

		if (brandRef.current) {
			resizeObserver.observe(brandRef.current)
		}

		window.addEventListener('resize', measure)

		return () => {
			resizeObserver.disconnect()
			window.removeEventListener('resize', measure)
		}
	}, [])

	useEffect(() => {
		if (!useMobileNav && isMobileMenuOpen) {
			setIsMobileMenuOpen(false)
		}
	}, [isMobileMenuOpen, useMobileNav])

	useEffect(() => {
		if (!isMobileMenuOpen) {
			return
		}

		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsMobileMenuOpen(false)
			}
		}

		window.addEventListener('keydown', handleEscapeKey)
		document.body.style.overflow = 'hidden'

		return () => {
			window.removeEventListener('keydown', handleEscapeKey)
			document.body.style.overflow = ''
		}
	}, [isMobileMenuOpen])

	const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="top-nav">
			<div className="top-nav__inner" ref={navInnerRef}>
				<NavLink to="/" className="brand" ref={brandRef}>
					Lemus Drywall
				</NavLink>

				<div
					className={`top-nav__desktop${useMobileNav ? ' is-hidden-for-mobile' : ''}`}
					ref={desktopRef}
				>
					<nav className="top-nav__links" aria-label="Main navigation">
						<NavLink to="/" end className={getNavClassName}>
							Home
						</NavLink>
						<NavLink to="/services" className={getNavClassName}>
							Services
						</NavLink>
						<NavLink to="/gallery" className={getNavClassName}>
							Gallery
						</NavLink>
						<NavLink to="/about" className={getNavClassName}>
							About Us
						</NavLink>
						<NavLink to="/contact" className={getNavClassName}>
							Contact
						</NavLink>
					</nav>

					<a className="call-us" href={`tel:${businessPhoneLink}`}>
						<span>Call Us</span>
						<small>{businessPhoneDisplay}</small>
					</a>
				</div>

				<button
					type="button"
					className={`menu-toggle${useMobileNav ? ' is-visible' : ''}${isMobileMenuOpen ? ' is-open' : ''}`}
					aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-nav-modal"
					onClick={() => setIsMobileMenuOpen((current) => !current)}
				>
					<span className="menu-toggle__bar" aria-hidden="true" />
					<span className="menu-toggle__bar" aria-hidden="true" />
					<span className="menu-toggle__bar" aria-hidden="true" />
				</button>
      </div>

			{useMobileNav && isMobileMenuOpen && (
				<div className="mobile-menu" role="dialog" aria-modal="true" id="mobile-nav-modal">
					<button
						type="button"
						className="mobile-menu__backdrop"
						aria-label="Close navigation menu"
						onClick={closeMobileMenu}
					/>

					<div className="mobile-menu__panel">
						<div className="mobile-menu__header">
							<p className="mobile-menu__title">Menu</p>
							<button
								type="button"
								className="mobile-menu__close"
								aria-label="Close navigation menu"
								onClick={closeMobileMenu}
							>
								Close
							</button>
						</div>

						<div className="mobile-menu__links">
							<NavLink to="/" end className={getNavClassName} onClick={closeMobileMenu}>
								Home
							</NavLink>
							<NavLink to="/services" className={getNavClassName} onClick={closeMobileMenu}>
								Services
							</NavLink>
							<NavLink to="/gallery" className={getNavClassName} onClick={closeMobileMenu}>
								Gallery
							</NavLink>
							<NavLink to="/about" className={getNavClassName} onClick={closeMobileMenu}>
								About Us
							</NavLink>
							<NavLink to="/contact" className={getNavClassName} onClick={closeMobileMenu}>
								Contact
							</NavLink>
							<a className="call-us call-us--mobile" href={`tel:${businessPhoneLink}`}>
								<span>Call Us</span>
								<small>{businessPhoneDisplay}</small>
							</a>
						</div>
					</div>
				</div>
			)}
    </header>
  )
}
