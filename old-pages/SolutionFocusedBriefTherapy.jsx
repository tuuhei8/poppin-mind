import { Link } from 'react-router-dom'
import { useLanguage } from '../frontend/src/context/LanguageContext'

const content={
  en: {
    tag:'Service',
    title:'Solution-Focused Brief Therapy',
    subtitle:'Short-term therapeutic support centred on strengths, goals, and meaningful change.',
    what:'What is solution-focused brief therapy?',
    p1:'Solution-Focused Brief Therapy is an evidence-based therapeutic approach that concentrates on solutions rather than problems. It is designed to help you move forward efficiently while respecting your strengths and autonomy.',
    p2:'Most courses of therapy involve only a few sessions. The focus stays on what you want to be different and what steps will help you get there.',
    how:'How is it different from coaching?',
    p3:'While coaching focuses on growth and goals, brief therapy is better suited when emotional distress or deeper psychological challenges are part of the picture.',
    list:[
      'Evidence-based framework',
      'Focuses on what you want, not what went wrong',
      'Often works within 3–8 sessions',
      'Suitable for a wide range of concerns',
      'Empowering and respectful'
    ],
    right:'Is it right for me?',
    p4:'This can help with anxiety, low mood, relationship difficulties, grief, stress, and life transitions. If you want professional support without committing to years of therapy, it may be a good fit.',
    p5:'If you are unsure whether coaching or therapy would suit you better, we can discuss that together in an introductory conversation.',
    ctaTitle:'Change does not have to take forever',
    ctaText:'A few focused sessions can make a real difference.',
    ctaButton:'Book a Session'
  },

  fi: {
    tag:'Palvelu',
    title:'Ratkaisukeskeinen lyhytterapia',
    subtitle:'Lyhytkestoista terapeuttista tukea, jonka keskiössä ovat vahvuudet, tavoitteet ja merkityksellinen muutos.',
    what:'Mitä ratkaisukeskeinen lyhytterapia on?',
    p1:'Ratkaisukeskeinen lyhytterapia on näyttöön perustuva terapeuttinen lähestymistapa, joka keskittyy ratkaisuihin ongelmien sijaan. Sen tavoitteena on auttaa sinua etenemään tehokkaasti vahvuuksiasi ja autonomiaasi kunnioittaen.',
    p2:'Usein terapiaprosessi koostuu vain muutamasta tapaamisesta. Huomio pidetään siinä, mitä haluat elämässäsi muuttuvan ja mitkä askeleet vievät sinua siihen suuntaan.',
    how:'Miten se eroaa coachingista?',
    p3:'Coaching painottuu kasvuun ja tavoitteisiin, kun taas lyhytterapia sopii paremmin tilanteisiin, joissa mukana on kuormitusta, tunnehaasteita tai syvempiä psykologisia teemoja.',
    list:[
      'Näyttöön perustuva viitekehys',
      'Keskittyy siihen mitä haluat, ei siihen mikä meni pieleen',
      'Usein 3–8 tapaamista',
      'Sopii monenlaisiin elämäntilanteisiin',
      'Voimaannuttava ja kunnioittava'
    ],
    right:'Sopiiko tämä minulle?',
    p4:'Tämä voi auttaa esimerkiksi ahdistuksessa, alakuloisuudessa, ihmissuhdehaasteissa, surussa, stressissä ja elämänmuutoksissa. Jos haluat ammatillista tukea ilman vuosien terapiaprosessia, tämä voi olla hyvä vaihtoehto.',
    p5:'Jos et ole varma sopiiko coaching vai terapia paremmin tilanteeseesi, voimme pohtia sitä yhdessä alkukeskustelussa.',
    ctaTitle:'Muutoksen ei tarvitse kestää ikuisesti',
    ctaText:'Muutama fokusoitu tapaaminen voi tehdä todellisen eron.',
    ctaButton:'Varaa aika'
  }
}

export default function SolutionFocusedBriefTherapy(){
  const { language }=useLanguage();
  const t=content[language]; 
  return (<>
<section className="page-hero"><div className="container"><span className="section-header__tag fade-in">{t.tag}</span><h1 className="page-hero__title fade-in fade-in-delay-1">{t.title}</h1><p className="page-hero__subtitle fade-in fade-in-delay-2">{t.subtitle}</p></div></section>
<section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">💬</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.what}</h2><p>{t.p1}</p><p>{t.p2}</p></div></div></div></section>
<section className="section section--alt"><div className="container"><div className="content-block content-block--reverse"><div className="content-block__visual fade-in">🌈</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.how}</h2><p>{t.p3}</p><ul>{t.list.map((item)=><li key={item}>{item}</li>)}</ul></div></div></div></section>
<section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">🛡️</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.right}</h2><p>{t.p4}</p><p>{t.p5}</p></div></div></div></section>
<section className="section"><div className="container"><div className="cta-banner fade-in"><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><Link to="/contact" className="btn btn--primary">{t.ctaButton}</Link></div></div></section>
</>)}
