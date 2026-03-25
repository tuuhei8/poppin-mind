import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    tag: 'Coaching & Brief Therapy',
    title: 'A gentle space for growth, clarity, and change',
    subtitle:
      'Poppin Mind offers professional coaching and solution-focused brief therapy. Together, we explore your strengths and build pathways toward the life you want — at your own pace.',
    primary: 'Book a Session',
    secondary: 'Explore Services',
    whyTag: 'Why Poppin Mind',
    whyTitle: 'A safe foundation for your journey',
    whyDesc: 'Every person carries unique strengths. Our role is to help you rediscover them.',
    values: [
      ['🤝', 'Trust & Confidentiality', 'Everything shared in our sessions remains strictly confidential. Your privacy and sense of safety are our highest priority.'],
      ['🌱', 'Strengths-Based', 'Rather than focusing on problems, we build on what already works in your life to create positive, lasting change.'],
      ['💛', 'Warm & Professional', 'A combination of academic expertise and genuine warmth creates a space where you can feel both supported and empowered.'],
    ],
    servicesTag: 'What We Offer',
    servicesTitle: 'Our Services',
    servicesDesc: 'Tailored approaches to meet you where you are.',
    services: [
      ['🧠', 'Mental Coaching', 'Build mental resilience, develop focus, and cultivate a mindset that supports your goals.', '/services/mental-coaching'],
      ['🎯', 'Solution-Focused Coaching', 'A future-oriented approach that helps you define goals and find practical steps forward.', '/services/solution-focused-coaching'],
      ['💬', 'Solution-Focused Brief Therapy', 'Short-term therapeutic support designed to create meaningful change efficiently.', '/services/solution-focused-brief-therapy'],
      ['🐾', 'Animal-Assisted Coaching', 'Working alongside animals to promote emotional connection, presence, and insight.', '/services/animal-assisted-coaching'],
    ],
    learn: 'Learn more →',
    ctaTitle: 'Ready to take the first step?',
    ctaText: "Reaching out is the hardest part. We're here to make it easy and comfortable. Let's have a conversation.",
    ctaButton: 'Contact Us',
  },
  fi: {
    tag: 'Coaching & lyhytterapia',
    title: 'Lempeä tila kasvulle, selkeydelle ja muutokselle',
    subtitle:
      'Poppin Mind tarjoaa ammatillista coachingia ja ratkaisukeskeistä lyhytterapiaa. Yhdessä tutkimme vahvuuksiasi ja rakennamme polkuja kohti elämää, jota haluat elää — omaan tahtiisi.',
    primary: 'Varaa aika',
    secondary: 'Tutustu palveluihin',
    whyTag: 'Miksi Poppin Mind',
    whyTitle: 'Turvallinen perusta matkallesi',
    whyDesc: 'Jokaisella ihmisellä on omat vahvuutensa. Meidän tehtävämme on auttaa sinua löytämään ne uudelleen.',
    values: [
      ['🤝', 'Luottamus ja luottamuksellisuus', 'Kaikki, mitä tapaamisissa jaetaan, pysyy ehdottoman luottamuksellisena. Yksityisyytesi ja turvallisuuden tunteesi ovat meille ensisijaisia.'],
      ['🌱', 'Vahvuuslähtöinen', 'Emme keskity ongelmiin, vaan rakennamme sen varaan, mikä elämässäsi jo toimii, jotta muutos olisi myönteistä ja kestävää.'],
      ['💛', 'Lämmin ja ammattimainen', 'Akateeminen osaaminen ja aito lämpö luovat tilan, jossa voit tuntea olosi sekä tuetuksi että voimaantuneeksi.'],
    ],
    servicesTag: 'Mitä tarjoamme',
    servicesTitle: 'Palvelumme',
    servicesDesc: 'Sinulle räätälöityjä lähestymistapoja juuri siitä kohdasta, jossa olet nyt.',
    services: [
      ['🧠', 'Mental Coaching', 'Vahvista henkistä resilienssiäsi, kehitä keskittymistäsi ja rakenna ajattelutapaa, joka tukee tavoitteitasi.', '/services/mental-coaching'],
      ['🎯', 'Ratkaisukeskeinen coaching', 'Tulevaisuuteen suuntautuva lähestymistapa, joka auttaa määrittämään tavoitteesi ja löytämään käytännölliset seuraavat askeleet.', '/services/solution-focused-coaching'],
      ['💬', 'Ratkaisukeskeinen lyhytterapia', 'Lyhytkestoinen terapeuttinen tuki, jonka tavoitteena on aikaan saada merkityksellistä muutosta tehokkaasti.', '/services/solution-focused-brief-therapy'],
      ['🐾', 'Eläinavusteinen coaching', 'Työskentely eläinten kanssa voi lisätä tunnetason yhteyttä, läsnäoloa ja oivalluksia.', '/services/animal-assisted-coaching'],
    ],
    learn: 'Lue lisää →',
    ctaTitle: 'Valmis ottamaan ensimmäisen askeleen?',
    ctaText: 'Yhteydenotto on usein vaikein osa. Olemme täällä tekemässä siitä helppoa ja turvallista. Keskustellaan.',
    ctaButton: 'Ota yhteyttä',
  },
  sv: {
    tag: 'Coaching & korttidsterapi',
    title: 'En trygg plats för utveckling, klarhet och förändring',
    subtitle:
      'Poppin Mind erbjuder professionell coaching och lösningsfokuserad korttidsterapi. Tillsammans utforskar vi dina styrkor och bygger vägar mot det liv du vill leva — i din egen takt.',
    primary: 'Boka en tid',
    secondary: 'Utforska tjänster',
    whyTag: 'Varför Poppin Mind',
    whyTitle: 'En trygg grund för din resa',
    whyDesc: 'Varje människa bär på unika styrkor. Vår roll är att hjälpa dig att hitta dem igen.',
    values: [
      ['🤝', 'Tillit och konfidentialitet', 'Allt som delas i våra samtal förblir strikt konfidentiellt. Din integritet och känsla av trygghet är vår högsta prioritet.'],
      ['🌱', 'Styrkebaserat', 'I stället för att fokusera på problem bygger vi vidare på det som redan fungerar i ditt liv för att skapa positiv och hållbar förändring.'],
      ['💛', 'Varmt och professionellt', 'En kombination av akademisk expertis och genuin värme skapar ett rum där du kan känna dig både stöttad och stärkt.'],
    ],
    servicesTag: 'Vad vi erbjuder',
    servicesTitle: 'Våra tjänster',
    servicesDesc: 'Anpassade arbetssätt som möter dig där du är.',
    services: [
      ['🧠', 'Mental coaching', 'Bygg mental motståndskraft, utveckla fokus och odla ett tankesätt som stödjer dina mål.', '/services/mental-coaching'],
      ['🎯', 'Lösningsfokuserad coaching', 'Ett framtidsinriktat arbetssätt som hjälper dig att definiera mål och hitta praktiska steg framåt.', '/services/solution-focused-coaching'],
      ['💬', 'Lösningsfokuserad korttidsterapi', 'Kortvarigt terapeutiskt stöd som är utformat för att skapa meningsfull förändring på ett effektivt sätt.', '/services/solution-focused-brief-therapy'],
      ['🐾', 'Djurassisterad coaching', 'Att arbeta tillsammans med djur kan främja känslomässig kontakt, närvaro och insikt.', '/services/animal-assisted-coaching'],
    ],
    learn: 'Läs mer →',
    ctaTitle: 'Redo att ta första steget?',
    ctaText: 'Att höra av sig är ofta den svåraste delen. Vi finns här för att göra det enkelt och tryggt. Låt oss prata.',
    ctaButton: 'Kontakta oss',
  },
}

export default function Home() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__tag fade-in">{t.tag}</span>
            <h1 className="hero__title fade-in fade-in-delay-1">{t.title}</h1>
            <p className="hero__subtitle fade-in fade-in-delay-2">{t.subtitle}</p>
            <div className="hero__actions fade-in fade-in-delay-3">
              <Link to="/contact" className="btn btn--primary">{t.primary}</Link>
              <Link to="/services" className="btn btn--outline">{t.secondary}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">{t.whyTag}</span>
            <h2 className="section-header__title">{t.whyTitle}</h2>
            <p className="section-header__desc" style={{ margin: '0 auto' }}>{t.whyDesc}</p>
          </div>

          <div className="values-grid">
            {t.values.map(([icon, title, desc], index) => (
              <div className={`value-card fade-in fade-in-delay-${index + 1}`} key={title}>
                <div className="value-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">{t.servicesTag}</span>
            <h2 className="section-header__title">{t.servicesTitle}</h2>
            <p className="section-header__desc" style={{ margin: '0 auto' }}>{t.servicesDesc}</p>
          </div>

          <div className="services-grid">
            {t.services.map(([icon, title, desc, link]) => (
              <Link to={link} key={title} className="service-card fade-in">
                <div className="service-card__icon">{icon}</div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__text">{desc}</p>
                <span className="service-card__link">{t.learn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <Link to="/contact" className="btn btn--primary">{t.ctaButton}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
