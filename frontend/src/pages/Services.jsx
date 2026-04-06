import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import ContactBanner from '../components/ContactBanner'
import ServiceLinks from '../components/ServiceLinks'
import PageHero from '../components/PageHero'

const content = {
  en: {
    heroTag: 'Our Services', heroTitle: 'How we can support you', heroSubtitle: 'We offer a range of professional coaching and therapy services, each tailored to meet your unique needs and goals.',
    services: [
      ['🧠','Mental Coaching','Develop mental strength, improve focus, and build a resilient mindset that supports you in everyday life and beyond.','/services/mental-coaching'],
      ['🎯','Solution-Focused Coaching','Instead of dwelling on problems, solution-focused coaching directs your energy toward the future you want.','/services/solution-focused-coaching'],
      ['💬','Solution-Focused Brief Therapy','A structured, short-term therapeutic approach that helps you create meaningful change in a focused timeframe.','/services/solution-focused-brief-therapy'],
      ['🐾','Animal-Assisted Coaching','Working alongside animals becomes a catalyst for insight, emotional awareness, and personal growth.','/services/animal-assisted-coaching'],
    ],
    learn: 'Learn more →', appTag: 'Our Approach', appTitle: 'What to expect',
    steps: [
      ['📞','1. Initial Conversation','We start with a brief, informal chat to understand your needs and see if we are a good fit.'],
      ['🗺️','2. Personalised Plan','Together, we create a plan tailored to your goals.'],
      ['🌟','3. Growth & Progress','Step by step, you build insight and momentum.'],
    ],
    ctaTitle: 'Not sure which service is right for you?', ctaText: 'Reach out and we will help you find the best fit during a free introductory conversation.', ctaButton: 'Contact Us',
  },
  fi: {
    heroTag: 'Palvelumme', heroTitle: 'Miten voimme tukea sinua', heroSubtitle: 'Tarjoamme erilaisia ammatillisen coachingin ja terapian palveluja, jotka räätälöidään juuri sinun tarpeidesi ja tavoitteidesi mukaan.',
    services: [
      ['🧠','Mental Coaching','Vahvista mielen taitoja, paranna keskittymistäsi ja rakenna arkea tukeva, kestävä ajattelutapa.','/services/mental-coaching'],
      ['🎯','Ratkaisukeskeinen coaching','Ratkaisukeskeisessä coachingissa suuntaamme energian ongelmista kohti toivomaasi tulevaisuutta.','/services/solution-focused-coaching'],
      ['💬','Ratkaisukeskeinen lyhytterapia','Jäsennelty, lyhytkestoinen terapeuttinen lähestymistapa, joka auttaa aikaansaamaan merkityksellistä muutosta.','/services/solution-focused-brief-therapy'],
      ['🐾','Eläinavusteinen coaching','Yhdessä eläinten kanssa työskentely voi lisätä oivalluksia, tunnetietoisuutta ja kasvua.','/services/animal-assisted-coaching'],
    ],
    learn: 'Lue lisää →', appTag: 'Lähestymistapamme', appTitle: 'Mitä voit odottaa',
    steps: [
      ['📞','1. Ensikeskustelu','Aloitamme lyhyellä, rennolla keskustelulla, jossa kartoitamme tarpeesi ja yhteensopivuuden.'],
      ['🗺️','2. Yksilöllinen suunnitelma','Luomme yhdessä tavoitteisiisi sopivan suunnitelman.'],
      ['🌟','3. Kasvu ja edistyminen','Askel askeleelta rakennat ymmärrystä, taitoja ja etenemistä.'],
    ],
    ctaTitle: 'Etkö ole varma, mikä palvelu sopii sinulle?', ctaText: 'Ota yhteyttä, niin autamme löytämään sopivimman vaihtoehdon maksuttomassa alkukeskustelussa.', ctaButton: 'Ota yhteyttä',
  }
}

export default function Services({ serviceLinks }) {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <>
      <PageHero tag={t.heroTag} title={t.heroTitle} subtitle={t.heroSubtitle} />

      <section className="section">
        <div className="container">
          <ServiceLinks serviceLinks={serviceLinks} learn={t.learn} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">{t.appTag}</span>
            <h2 className="section-header__title">{t.appTitle}</h2>
          </div>
          <div className="values-grid">{t.steps.map((step, index) =>
            <div className={`value-card fade-in fade-in-delay-${index+1}`} key={step[1]}>
              <div className="value-card__icon">
                {step[0]}
              </div>
              <h3>{step[1]}</h3>
              <p>{step[2]}</p>
            </div>)}
          </div>
        </div>
      </section>

      <ContactBanner title={t.ctaTitle} text={t.ctaText} button={t.ctaButton} />
    </>
  )
}
