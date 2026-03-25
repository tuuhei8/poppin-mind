import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const labels = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Get in Touch',
    toggle: 'Toggle menu',
    lang: 'Language',
  },
  fi: {
    home: 'Etusivu',
    about: 'Tietoa',
    services: 'Palvelut',
    pricing: 'Hinnasto',
    contact: 'Ota yhteyttä',
    toggle: 'Avaa valikko',
    lang: 'Kieli',
  },
  sv: {
    home: 'Hem',
    about: 'Om',
    services: 'Tjänster',
    pricing: 'Priser',
    contact: 'Kontakta oss',
    toggle: 'Öppna meny',
    lang: 'Språk',
  },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { language, setLanguage } = useLanguage()
  const t = labels[language]

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
          Poppin <span>Mind</span>
        </Link>

        <div className="navbar__controls">
          <div className="language-toggle" aria-label={t.lang}>
            <button
              type="button"
              className={language === 'en' ? 'language-toggle__button language-toggle__button--active' : 'language-toggle__button'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'fi' ? 'language-toggle__button language-toggle__button--active' : 'language-toggle__button'}
              onClick={() => setLanguage('fi')}
            >
              FI
            </button>
            <button
              type="button"
              className={language === 'sv' ? 'language-toggle__button language-toggle__button--active' : 'language-toggle__button'}
              onClick={() => setLanguage('sv')}
            >
              SV
            </button>
          </div>

          <button
            className="navbar__hamburger"
            onClick={() => setOpen(!open)}
            aria-label={t.toggle}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          <li><Link to="/" className={isActive('/')}>{t.home}</Link></li>
          <li><Link to="/about" className={isActive('/about')}>{t.about}</Link></li>
          <li><Link to="/services" className={isActive('/services')}>{t.services}</Link></li>
          <li><Link to="/pricing" className={isActive('/pricing')}>{t.pricing}</Link></li>
          <li>
            <Link to="/contact" className="btn btn--primary navbar__cta">
              {t.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
