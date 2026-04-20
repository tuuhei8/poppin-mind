import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    description: 'Professional coaching and solution-focused brief therapy to help you discover your strengths, overcome obstacles, and create meaningful change in your life.',
    services: 'Services',
    nepsy: 'Neuropsychiatric Coaching',
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
    description: 'Ammatillista coachingia ja ratkaisukeskeistä lyhytterapiaa, joka auttaa sinua löytämään vahvuutesi, voittamaan esteitä ja luomaan merkityksellistä muutosta elämääsi.',
    services: 'Palvelut',
    nepsy: 'Neuropsykiatrinen valmennus',
    solution: 'Ratkaisukeskeinen coaching',
    brief: 'Lyhytterapia',
    animal: 'Eläinavusteinen coaching',
    quick: 'Pikalinkit',
    about: 'Tietoa',
    pricing: 'Hinnasto',
    contact: 'Yhteystiedot',
    rights: 'Kaikki oikeudet pidätetään.',
  }
}

function ServiceList({ serviceLinks }) {
  const { language } = useLanguage()

  return (
    <>
      {serviceLinks.map(s => {
        const service = s[language]

        if (!service) {
          return null
        }

        return (
          <li key={service.title} ><Link to={`/services/${s.path}`} >{service.title}</Link></li>
        )}
      )}
    </>
  )
}

export default function Footer({ serviceLinks }) {
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
              <ServiceList serviceLinks={serviceLinks} />
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
