import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    tag: '404',
    title: 'Page not found',
    subtitle: 'The page you were looking for does not exist or may have been moved.',
    button: 'Back to Home',
  },
  fi: {
    tag: '404',
    title: 'Sivua ei löytynyt',
    subtitle: 'Etsimääsi sivua ei löytynyt tai se on voitu siirtää.',
    button: 'Takaisin etusivulle',
  },
  sv: {
    tag: '404',
    title: 'Sidan hittades inte',
    subtitle: 'Sidan du letade efter finns inte eller kan ha flyttats.',
    button: 'Till startsidan',
  },
}

export default function NotFound() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section className="page-hero">
      <div className="container text-center">
        <span className="section-header__tag fade-in">{t.tag}</span>
        <h1 className="page-hero__title fade-in fade-in-delay-1">{t.title}</h1>
        <p className="page-hero__subtitle fade-in fade-in-delay-2">{t.subtitle}</p>
        <Link to="/" className="btn btn--primary fade-in fade-in-delay-3">
          {t.button}
        </Link>
      </div>
    </section>
  )
}
