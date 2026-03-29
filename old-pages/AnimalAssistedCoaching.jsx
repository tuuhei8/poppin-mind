import { Link } from 'react-router-dom'
import { useLanguage } from '../frontend/src/context/LanguageContext'

const content={
 en:{
  tag:'Service',
  title:'Animal-Assisted Coaching',
  subtitle:'Experience the unique power of working alongside animals to foster emotional awareness, presence, and personal growth.',
  what:'What is animal-assisted coaching?',
  p1:'Animal-assisted coaching integrates the presence of trained animals into the coaching process. Animals can create a safe, grounding atmosphere and help bring emotions and patterns into awareness.',
  p2:'Working with animals can lower stress, increase emotional awareness, and offer fresh perspectives on how you relate to yourself and others.',
  how:'How does it work?',
  p3:'During a session, you interact with animals in structured activities guided by your coach. These moments can reveal insights that do not always surface in a traditional conversation.',
  list:[
    'Builds emotional regulation and awareness',
    'Encourages presence and mindfulness',
    'Reveals relational patterns through non-verbal interaction',
    'Reduces anxiety and creates a calming environment',
    'Accessible for different ages and backgrounds'
  ],
  who:'Who is it for?',
  p4:'This approach can be especially helpful for people who find traditional talk-based methods challenging, for children and young people, or for anyone who feels a natural connection with animals.',
  p5:'It can also complement other coaching or therapeutic approaches for a more holistic experience.',
  ctaTitle:'Curious about animal-assisted coaching?',
  ctaText:'Let us talk about how this unique approach could work for you.',
  ctaButton:'Get in Touch'
},
 fi:{
  tag:'Palvelu',
  title:'Eläinavusteinen coaching',
  subtitle:'Koe eläinten kanssa työskentelyn ainutlaatuinen voima tunnetietoisuuden, läsnäolon ja henkilökohtaisen kasvun tukena.',
  what:'Mitä eläinavusteinen coaching on?',
  p1:'Eläinavusteinen coaching tuo koulutettujen eläinten läsnäolon osaksi coaching-prosessia. Eläimet voivat luoda turvallisen ja maadoittavan ilmapiirin sekä auttaa tunteiden ja toimintamallien tunnistamisessa.',
  p2:'Työskentely eläinten kanssa voi laskea stressiä, lisätä tunnetietoisuutta ja tarjota uusia näkökulmia siihen, miten suhtaudut itseesi ja muihin.',
  how:'Miten se toimii?',
  p3:'Tapaamisen aikana olet vuorovaikutuksessa eläinten kanssa coachin ohjaamissa rakenteellisissa harjoituksissa. Ne voivat tuoda esiin oivalluksia, joita tavallinen keskustelu ei aina tavoita.',
  list:[
    'Vahvistaa tunnesäätelyä ja tunnetietoisuutta',
    'Kannustaa läsnäoloon ja mindfulnessiin',
    'Paljastaa vuorovaikutusmalleja sanattoman kontaktin kautta',
    'Vähentää ahdistusta ja luo rauhoittavan ympäristön',
    'Sopii eri-ikäisille ja erilaisista taustoista tuleville'],
  who:'Kenelle se sopii?',
  p4:'Lähestymistapa voi olla erityisen hyödyllinen ihmisille, joille pelkkään keskusteluun perustuvat menetelmät ovat haastavia, lapsille ja nuorille sekä kaikille, joilla on luonteva yhteys eläimiin.',
  p5:'Sitä voidaan myös yhdistää muihin coaching- tai terapiamuotoihin kokonaisvaltaisemman kokemuksen luomiseksi.',ctaTitle:'Kiinnostaako eläinavusteinen coaching?',ctaText:'Keskustellaan siitä, voisiko tämä ainutlaatuinen lähestymistapa sopia sinulle.',ctaButton:'Ota yhteyttä'}
}

export default function AnimalAssistedCoaching(){
  const { language }=useLanguage();
  const t=content[language]; 
  
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">{t.tag}</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">{t.title}</h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">{t.subtitle}</p>
        </div>
      </section>

      <section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">🐾</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.what}</h2><p>{t.p1}</p><p>{t.p2}</p></div></div></div></section>
      <section className="section section--alt"><div className="container"><div className="content-block content-block--reverse"><div className="content-block__visual fade-in">🌿</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.how}</h2><p>{t.p3}</p><ul>{t.list.map((item)=><li key={item}>{item}</li>)}</ul></div></div></div></section>
      <section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">❤️</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.who}</h2><p>{t.p4}</p><p>{t.p5}</p></div></div></div></section>
      <section className="section"><div className="container"><div className="cta-banner fade-in"><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><Link to="/contact" className="btn btn--primary">{t.ctaButton}</Link></div></div></section>
    </>
  )
}
