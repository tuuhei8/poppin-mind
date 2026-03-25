import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    tag: 'About', title: 'The person behind Poppin Mind', subtitle: 'A foundation of academic expertise, real-world experience, and genuine care for every individual.',
    bgTitle: 'A background rooted in understanding people',
    bg1: 'The founder of Poppin Mind brings a rich academic and professional background in psychology and education. With experience teaching psychology and working in the field of special education, they have developed a deep understanding of how people think, learn, and grow.',
    bg2: 'Holding two master\'s degrees, they combine scholarly knowledge with practical, empathetic coaching methods. This blend ensures that every session is both grounded in evidence and shaped by genuine human connection.',
    qualTag: 'Qualifications', qualTitle: 'Training & Expertise',
    quals: [
      ['🎓','Two Master\'s Degrees','Advanced academic training providing a strong theoretical and practical foundation.'],
      ['📚','Psychology Teaching','Experience teaching psychology, deepening expertise in human behaviour and cognition.'],
      ['🤲','Special Education','Work in special education, building skills in adaptive, empathetic support.'],
      ['🧠','Mental Coaching Certification','Qualified mental coach with training in resilience, focus, and mindset development.'],
      ['🎯','Solution-Focused Methods','Trained in solution-focused coaching and brief therapy approaches.'],
      ['🐾','Animal-Assisted Interventions','Qualified to integrate animals into coaching sessions for deeper engagement.'],
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
      ['🎓','Kaksi maisteritutkintoa','Laaja akateeminen koulutus, joka luo vahvan teoreettisen ja käytännöllisen perustan.'],
      ['📚','Psykologian opetus','Kokemus psykologian opettamisesta on syventänyt ymmärrystä ihmisen käyttäytymisestä ja ajattelusta.'],
      ['🤲','Erityisopetus','Työ erityisopetuksessa on vahvistanut mukautuvaa ja empaattista tukiosaamista.'],
      ['🧠','Mental Coaching -sertifiointi','Koulutettu mental coach, jonka osaamiseen kuuluu resilienssi, keskittyminen ja ajattelutavan kehittäminen.'],
      ['🎯','Ratkaisukeskeiset menetelmät','Koulutus ratkaisukeskeisen coachingin ja lyhytterapian menetelmiin.'],
      ['🐾','Eläinavusteiset menetelmät','Pätevyys hyödyntää eläimiä coachingissa syvemmän kontaktin ja oivallusten tukena.'],
    ],
    approachTitle: 'Lähestymistapani',
    approach1: 'Uskon, että jokaisella ihmisellä on jo itsessään ne voimavarat, joita hän tarvitsee. Minun roolini on luoda lämmin ja turvallinen tila, jossa pääset niiden äärelle ja voit vahvistaa niitä.',
    approach2: 'Olitpa elämäntilanteen muutoksessa, hakemassa suuntaa tavoitteillesi tai työstämässä haasteita, kohtaan sinut juuri siinä missä olet — ilman arvostelua, täysin luottamuksellisesti ja aidosti hyvinvointiasi tukien.',
    button: 'Keskustellaan',
  },
  sv: {
    tag: 'Om', title: 'Personen bakom Poppin Mind', subtitle: 'En grund av akademisk expertis, praktisk erfarenhet och genuin omsorg om varje individ.',
    bgTitle: 'En bakgrund förankrad i förståelse för människor',
    bg1: 'Grundaren av Poppin Mind har en stark akademisk och professionell bakgrund inom psykologi och utbildning. Erfarenhet av att undervisa i psykologi och arbeta inom specialpedagogik har skapat en djup förståelse för hur människor tänker, lär sig och utvecklas.',
    bg2: 'Med två magisterexamina kombineras vetenskaplig kunskap med praktiska och empatiska coachingmetoder. Denna kombination gör att varje session både vilar på evidens och präglas av äkta mänsklig kontakt.',
    qualTag: 'Kvalifikationer', qualTitle: 'Utbildning och expertis',
    quals: [
      ['🎓','Två magisterexamina','Avancerad akademisk utbildning som ger en stark teoretisk och praktisk grund.'],
      ['📚','Undervisning i psykologi','Erfarenhet av att undervisa i psykologi har fördjupat expertisen kring mänskligt beteende och tänkande.'],
      ['🤲','Specialpedagogik','Arbete inom specialpedagogik har utvecklat färdigheter i anpassat och empatiskt stöd.'],
      ['🧠','Certifiering i mental coaching','Utbildad mental coach med fokus på resiliens, koncentration och mindset.'],
      ['🎯','Lösningsfokuserade metoder','Utbildning inom lösningsfokuserad coaching och korttidsterapi.'],
      ['🐾','Djurassisterade insatser','Kvalificerad att integrera djur i coaching för djupare engagemang.'],
    ],
    approachTitle: 'Mitt arbetssätt',
    approach1: 'Jag tror att varje människa redan bär på de resurser som behövs. Min roll är att skapa ett varmt och tryggt rum där du kan få kontakt med dem och bygga vidare på dem.',
    approach2: 'Oavsett om du står inför en livsförändring, söker klarhet kring dina mål eller arbetar med utmaningar möter jag dig där du är — utan att döma, med full konfidentialitet och med genuin omsorg om ditt välmående.',
    button: 'Låt oss prata',
  },
}

export default function About() {
  const { language } = useLanguage()
  const t = content[language]
  return (<>
    <section className="page-hero"><div className="container"><span className="section-header__tag fade-in">{t.tag}</span><h1 className="page-hero__title fade-in fade-in-delay-1">{t.title}</h1><p className="page-hero__subtitle fade-in fade-in-delay-2">{t.subtitle}</p></div></section>
    <section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">🌿</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.bgTitle}</h2><p>{t.bg1}</p><p>{t.bg2}</p></div></div></div></section>
    <section className="section section--alt"><div className="container"><div className="section-header text-center fade-in"><span className="section-header__tag">{t.qualTag}</span><h2 className="section-header__title">{t.qualTitle}</h2></div><div className="qualifications-list">{t.quals.map((q)=><div className="qualification-item fade-in" key={q[1]}><div className="qualification-item__icon">{q[0]}</div><div><h4>{q[1]}</h4><p>{q[2]}</p></div></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="content-block content-block--reverse"><div className="content-block__visual fade-in">☀️</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.approachTitle}</h2><p>{t.approach1}</p><p>{t.approach2}</p><Link to="/contact" className="btn btn--primary" style={{ marginTop: '1rem' }}>{t.button}</Link></div></div></div></section>
  </>)
}
