import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'
import qualificationsService from '../services/qualifications'
import PageHero from '../components/PageHero'

const content = {
  en: {
    tag: 'About', title: 'The person behind Poppin Mind', subtitle: 'A foundation of academic expertise, real-world experience, and genuine care for every individual.',
    bgTitle: 'A background rooted in understanding people',
    bg1: 'The founder of Poppin Mind brings a rich academic and professional background in psychology and education. With experience teaching psychology and working in the field of special education, they have developed a deep understanding of how people think, learn, and grow.',
    bg2: 'Holding two master\'s degrees, they combine scholarly knowledge with practical, empathetic coaching methods. This blend ensures that every session is both grounded in evidence and shaped by genuine human connection.',
    qualTag: 'Qualifications', qualTitle: 'Training & Expertise',
    quals: [
      [
        '🎓',
        'Two Master\'s Degrees',
        'Advanced academic training providing a strong theoretical and practical foundation.'
      ],
      [
        '📚',
        'Psychology Teaching',
        'Experience teaching psychology, deepening expertise in human behaviour and cognition.'
      ],
      [
        '🤲',
        'Special Education',
        'Work in special education, building skills in adaptive, empathetic support.'],
      [
        '🧠',
        'Neuropsychiatric Coaching Certification',
        'Qualified neuropsychiatric coach with training in resilience, focus, and mindset development.'
      ],
      [
        '🎯',
        'Solution-Focused Methods',
        'Trained in solution-focused coaching and brief therapy approaches.'
      ],
      [
        '🐾',
        'Animal-Assisted Interventions',
        'Qualified to integrate animals into coaching sessions for deeper engagement.'
      ],
    ],
    approachTitle: 'My approach',
    approach1: 'I believe that every person already holds the resources they need. My role is to create a warm, safe space where you can access those resources and build on them.',
    approach2: 'Whether you are navigating a life transition, seeking clarity on your goals, or working through challenges, I meet you where you are — without judgement, with full confidentiality, and with genuine care for your wellbeing.',
    button: "Let's Talk",
  },
  fi: {
    tag: 'Tietoa', title: 'Poppin Mindin taustalla oleva henkilö', subtitle: 'Pohjana akateeminen osaaminen, käytännön kokemus ja aito välittäminen jokaisesta ihmisestä.',
    bgTitle: 'Tausta, joka perustuu ihmisen ymmärtämiseen',
    bg1: 'Poppin Mindin perustajalla on vahva akateeminen ja ammatillinen tausta psykologian ja kasvatuksen alalta. Psykologian opettamisen ja erityisopetuksen kokemuksen kautta on syntynyt syvä ymmärrys siitä, miten ihmiset ajattelevat, oppivat ja kasvavat.',
    bg2: 'Kaksi maisteritutkintoa yhdistyvät käytännöllisiin ja empaattisiin coaching-menetelmiin. Tämä yhdistelmä varmistaa, että jokainen tapaaminen on sekä tutkittuun tietoon pohjautuva että aidosti inhimillinen.',
    qualTag: 'Koulutus', qualTitle: 'Osaaminen ja pätevyys',
    quals: [
      [
        '🎓',
        'Kaksi maisteritutkintoa',
        'Laaja akateeminen koulutus, joka luo vahvan teoreettisen ja käytännöllisen perustan.'
      ],
      [
        '📚',
        'Psykologian opetus',
        'Kokemus psykologian opettamisesta on syventänyt ymmärrystä ihmisen käyttäytymisestä ja ajattelusta.'
      ],
      [
        '🤲',
        'Erityisopetus',
        'Työ erityisopetuksessa on vahvistanut mukautuvaa ja empaattista tukiosaamista.'
      ],
      [
        '🧠',
        'Neuropsykiatrinen valmennus -sertifiointi',
        'Koulutettu nepsy-valmentaja, jonka osaamiseen kuuluu resilienssi, keskittyminen ja ajattelutavan kehittäminen.'
      ],
      [
        '🎯',
        'Ratkaisukeskeiset menetelmät',
        'Koulutus ratkaisukeskeisen coachingin ja lyhytterapian menetelmiin.'
      ],
      [
        '🐾',
        'Eläinavusteiset menetelmät',
        'Pätevyys hyödyntää eläimiä coachingissa syvemmän kontaktin ja oivallusten tukena.'
      ],
    ],
    approachTitle: 'Lähestymistapani',
    approach1: 'Uskon, että jokaisella ihmisellä on jo itsessään ne voimavarat, joita hän tarvitsee. Minun roolini on luoda lämmin ja turvallinen tila, jossa pääset niiden äärelle ja voit vahvistaa niitä.',
    approach2: 'Olitpa elämäntilanteen muutoksessa, hakemassa suuntaa tavoitteillesi tai työstämässä haasteita, kohtaan sinut juuri siinä missä olet — ilman arvostelua, täysin luottamuksellisesti ja aidosti hyvinvointiasi tukien.',
    button: 'Keskustellaan',
  }
}

export default function About() {
  const { language } = useLanguage()
  const t = content[language]
  const [qualifications, setQualifications] = useState([])

  useEffect(() => {
    qualificationsService
      .getAll()
      .then(qualifications => setQualifications(qualifications))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <PageHero tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">
              🌿
            </div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>{t.bgTitle}</h2>
              <p>{t.bg1}</p>
              <p>{t.bg2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">{t.qualTag}</span>
            <h2 className="section-header__title">{t.qualTitle}</h2>
          </div>
          <div className="qualifications-list">
            {qualifications.map((q) => {
              const qual = q[language]

              if (!qual) {
                return null
              }

              return (
                <div className="qualification-item fade-in" key={q.id}>
                  <div className="qualification-item__icon">{q.icon}</div>
                  <div>
                    <h4>{qual.title}</h4>
                    <p>{qual.text}</p>
                  </div>
                </div>
              )}
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block content-block--reverse">
            <div className="content-block__visual fade-in">
              ☀️
            </div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>{t.approachTitle}</h2>
              <p>{t.approach1}</p>
              <p>{t.approach2}</p>
              <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1rem' }}>{t.button}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
