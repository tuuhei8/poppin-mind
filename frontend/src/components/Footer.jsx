import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    description:
      'Professional coaching and solution-focused brief therapy to help you discover your strengths, overcome obstacles, and create meaningful change in your life.',
    services: 'Services',
    mental: 'Mental Coaching',
    solution: 'Solution-Focused Coaching',
    brief: 'Brief Therapy',
    animal: 'Animal-Assisted Coaching',
    quick: 'Quick Links',
    about: 'About',
    pricing: 'Pricing',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  fi: {
    description:
      'Ammatillista coachingia ja ratkaisukeskeistä lyhytterapiaa, joka auttaa sinua löytämään vahvuutesi, voittamaan esteitä ja luomaan merkityksellistä muutosta elämääsi.',
    services: 'Palvelut',
    mental: 'Mental Coaching',
    solution: 'Ratkaisukeskeinen coaching',
    brief: 'Lyhytterapia',
    animal: 'Eläinavusteinen coaching',
    quick: 'Pikalinkit',
    about: 'Tietoa',
    pricing: 'Hinnasto',
    contact: 'Yhteystiedot',
    rights: 'Kaikki oikeudet pidätetään.',
  },
  sv: {
    description:
      'Professionell coaching och lösningsfokuserad korttidsterapi som hjälper dig att upptäcka dina styrkor, övervinna hinder och skapa meningsfull förändring i ditt liv.',
    services: 'Tjänster',
    mental: 'Mental coaching',
    solution: 'Lösningsfokuserad coaching',
    brief: 'Korttidsterapi',
    animal: 'Djurassisterad coaching',
    quick: 'Snabblänkar',
    about: 'Om',
    pricing: 'Priser',
    contact: 'Kontakt',
    rights: 'Alla rättigheter förbehållna.',
  },
}

export default function Footer() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <h3>Poppin <span>Mind</span></h3>
            <p>{t.description}</p>
          </div>

          <div className="footer__col">
            <h4>{t.services}</h4>
            <ul>
              <li><Link to="/services/mental-coaching">{t.mental}</Link></li>
              <li><Link to="/services/solution-focused-coaching">{t.solution}</Link></li>
              <li><Link to="/services/solution-focused-brief-therapy">{t.brief}</Link></li>
              <li><Link to="/services/animal-assisted-coaching">{t.animal}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t.quick}</h4>
            <ul>
              <li><Link to="/about">{t.about}</Link></li>
              <li><Link to="/pricing">{t.pricing}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          &copy; {new Date().getFullYear()} Poppin Mind. {t.rights}
        </div>
      </div>
    </footer>
  )
}
