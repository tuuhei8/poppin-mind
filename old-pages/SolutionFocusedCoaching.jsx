import { Link } from 'react-router-dom'
import { useLanguage } from '../frontend/src/context/LanguageContext'

const content={
 en:{tag:'Service',title:'Solution-Focused Coaching',
    subtitle:'A forward-looking approach that helps you identify what you want and find the most direct path to get there.',
    what:'What is solution-focused coaching?',
    p1:'Solution-focused coaching is built on a simple but powerful idea: instead of analysing problems in depth, we direct our energy toward envisioning and building the future you want.',
    p2:'This approach recognises that you are the expert on your own life. Through carefully crafted questions and reflections, we uncover the strengths and resources you already have — and put them to work.',
    how:'How does it work?',list:['Define clear, meaningful goals','Recognise what is already working','Scale progress and celebrate small wins','Build momentum through practical action steps','Develop self-reliance and inner confidence'],
    who:'Who benefits from this approach?',
    who1:'This is ideal for people who feel stuck but want to move forward, who are navigating transitions, or who want support in reaching a specific goal.',
    who2:'It is well suited for anyone who prefers a positive, practical approach rather than spending a long time exploring past difficulties.',
    ctaTitle:'Start focusing on solutions',
    ctaText:'Your next chapter begins with a single conversation.',
    ctaButton:'Get in Touch'},
 fi:{tag:'Palvelu',title:'Ratkaisukeskeinen coaching',
    subtitle:'Tulevaisuuteen suuntautuva lähestymistapa, joka auttaa tunnistamaan mitä haluat ja löytämään suoran reitin sitä kohti.',
    what:'Mitä ratkaisukeskeinen coaching on?',
    p1:'Ratkaisukeskeinen coaching perustuu yksinkertaiseen mutta voimakkaaseen ajatukseen: ongelmien pitkän analysoinnin sijaan suuntaamme energian siihen, millaista tulevaisuutta haluat rakentaa.',
    p2:'Lähestymistapa tunnistaa, että olet oman elämäsi paras asiantuntija. Tarkkojen kysymysten ja reflektion avulla löydämme vahvuudet ja voimavarat, jotka sinulla jo on — ja otamme ne käyttöön.',
    how:'Miten se toimii?',
    list:['Määritellään selkeät ja merkitykselliset tavoitteet',
        'Tunnistetaan mikä toimii jo nyt',
        'Seurataan edistymistä ja huomataan pienet onnistumiset',
        'Rakennetaan etenemistä konkreettisilla askelilla',
        'Vahvistetaan omatoimisuutta ja sisäistä luottamusta'],
    who:'Kenelle tämä sopii?',
    who1:'Tämä sopii erityisesti ihmisille, jotka kokevat olevansa jumissa mutta haluavat liikkua eteenpäin, jotka käyvät läpi muutoksia tai tarvitsevat tukea tietyn tavoitteen saavuttamiseen.',
    who2:'Se sopii hyvin myös niille, jotka arvostavat myönteistä ja käytännöllistä lähestymistapaa menneisyyden pitkän läpikäymisen sijaan.',
    ctaTitle:'Aloita ratkaisuihin suuntaaminen',
    ctaText:'Seuraava lukusi voi alkaa yhdestä keskustelusta.',
    ctaButton:'Ota yhteyttä'},
}

export default function SolutionFocusedCoaching(){const { language }=useLanguage(); const t=content[language]; return (<>
<section className="page-hero"><div className="container"><span className="section-header__tag fade-in">{t.tag}</span><h1 className="page-hero__title fade-in fade-in-delay-1">{t.title}</h1><p className="page-hero__subtitle fade-in fade-in-delay-2">{t.subtitle}</p></div></section>
<section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">🎯</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.what}</h2><p>{t.p1}</p><p>{t.p2}</p></div></div></div></section>
<section className="section section--alt"><div className="container"><div className="content-block content-block--reverse"><div className="content-block__visual fade-in">🗝️</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.how}</h2><ul>{t.list.map((item)=><li key={item}>{item}</li>)}</ul></div></div></div></section>
<section className="section"><div className="container"><div className="content-block"><div className="content-block__visual fade-in">🌟</div><div className="content-block__body fade-in fade-in-delay-1"><h2>{t.who}</h2><p>{t.who1}</p><p>{t.who2}</p></div></div></div></section>
<section className="section"><div className="container"><div className="cta-banner fade-in"><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><Link to="/contact" className="btn btn--primary">{t.ctaButton}</Link></div></div></section>
</>)}
