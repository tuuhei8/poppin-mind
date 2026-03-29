import { useLanguage } from "../context/LanguageContext"
import { Link } from 'react-router-dom'

export default function ServiceLinks({ serviceLinks, learn }) {
  const { language } = useLanguage()
  const error = {
    en: { message: 'Sorry, there seems to be a problem on our end.' },
    fi: { message: 'Pahoittelut, meidän päässämme näyttäisi olevan ongelma.' }
  }

  if (serviceLinks.length === 0) {
    return <div>{error[language].message}</div>
  }

  return (
    <div className="services-grid">
      {serviceLinks.map((s, i) => {
        const serviceLink = s[language]

        if (!serviceLink) {
          return null
        }

        return (
          <Link to={`/services/${s.path}`} key={s.id} className={`service-card fade-in fade-in-delay-${(i%4)+1}`}>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{serviceLink.title}</h3>
            <p className="service-card__text">{serviceLink.summary}</p>
            <span className="service-card__link">{learn}</span>
          </Link>
        )}
      )}
    </div>
  )
}