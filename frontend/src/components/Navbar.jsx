import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) =>
    location.pathname === path ? 'navbar__link navbar__link--active' : 'navbar__link'

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Popping <span>Mind</span>
        </Link>

        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
          <li><Link to="/pricing" className={isActive('/pricing')}>Pricing</Link></li>
          <li>
            <Link to="/contact" className="btn btn--primary navbar__cta">
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
