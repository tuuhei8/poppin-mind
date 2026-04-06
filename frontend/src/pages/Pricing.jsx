import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import ContactBanner from '../components/ContactBanner'
import { useEffect, useState } from 'react'
import pricingService from '../services/prices'
import PageHero from '../components/PageHero'

const content = {
  en: {
    tag:'Pricing',
    title:'Transparent, fair pricing',
    session: '/ session',
    minutes: 'minutes',
    free: 'Free',
    subtitle:'Investing in yourself is one of the most valuable things you can do. Our pricing is clear and straightforward.',
    plans:[
      [
        'Online Session',
        'Coaching or therapy from the comfort of your own space.',
        '€50',
        '/ session',
        '45 minutes',
        [
          'Video call via a secure platform',
          'Flexible scheduling',
          'Available for all service types',
          'Suitable for follow-up sessions'
        ],
        'Book Online Session',
        'outline'
      ],
      [
        'In-Person Session',
        'Face-to-face coaching in a calm, welcoming environment.',
        '€60',
        '/ session',
        '60 minutes',
        [
          'Private, comfortable setting',
          'Full hour of dedicated time',
          'Available for all service types',
          'Includes animal-assisted options'
        ],
        'Book In-Person Session',
        'primary'
      ],
      [
        'Introductory Call',
        'A free, no-obligation conversation to see if we are a good fit.',
        'Free',
        '',
        '15–20 minutes',
        [
          'Get to know each other',
          'Discuss your needs and goals',
          'Ask any questions you have',
          'No commitment required'
        ],
        'Schedule Free Call',
        'outline'
      ]
    ],
    good:'Good to Know',
    faq:'Frequently asked questions',
    qs: [
      [
        '📅',
        'How do I schedule?',
        'Use our contact form or reach out by email. We will find a time that works for both of us.'
      ],
      [
        '🔄',
        'Can I cancel or reschedule?',
        'Yes — we ask for at least 24 hours’ notice for cancellations or rescheduling.'
      ],
      [
        '💳',
        'How do I pay?',
        'Payment details are shared after booking. We accept bank transfer and common online payment methods.'
      ]
    ],
    ctaTitle:'Questions about pricing?',
    ctaText:'We are happy to discuss options. Reach out anytime.',
    ctaButton:'Contact Us'},
  fi:{
    tag:'Hinnasto',
    title:'Selkeä ja reilu hinnoittelu',
    session: '/ tapaaminen',
    minutes: 'minuuttia',
    free: 'Maksuton',
    subtitle:'Itsesi tukeminen on yksi arvokkaimmista investoinneista, joita voit tehdä. Hinnoittelumme on selkeä ja suoraviivainen.',
    plans:[
      [
        'Etätapaaminen',
        'Coachingia tai terapiaa omasta rauhallisesta ympäristöstäsi.',
        '€50',
        '/ tapaaminen',
        '45 minuuttia',
        [
          'Videopuhelu turvallisen alustan kautta',
          'Joustava ajanvaraus',
          'Saatavilla kaikkiin palveluihin',
          'Sopii myös jatkotapaamisiin'
        ],
        'Varaa etätapaaminen',
        'outline'
      ],
      [
        'Lähitapaaminen',
        'Kasvokkainen coaching rauhallisessa ja lämpimässä ympäristössä.',
        '€60',
        '/ tapaaminen',
        '60 minuuttia',
        [
          'Yksityinen ja mukava tila',
          'Täysi tunti omistettua aikaa',
          'Saatavilla kaikkiin palveluihin',
          'Mahdollisuus eläinavusteisiin vaihtoehtoihin'
        ],
          'Varaa lähitapaaminen',
          'primary'
        ],
        [
          'Alkukeskustelu',
          'Maksuton ja sitoumukseton keskustelu yhteensopivuuden arvioimiseksi.',
          'Maksuton',
          '',
          '15–20 minuuttia',
          [
            'Tutustutaan toisiimme',
            'Käydään läpi tarpeesi ja tavoitteesi',
            'Voit esittää kysymyksiä',
            'Ei sitoutumispakkoa'
          ],
          'Varaa maksuton puhelu',
          'outline'
        ]
    ],
    good:'Hyvä tietää',
    faq:'Usein kysytyt kysymykset',
    qs:[
      [
        '📅','Miten varaan ajan?',
        'Voit käyttää yhteydenottolomaketta tai lähettää sähköpostia. Etsimme yhdessä sopivan ajan.'
      ],
      [
        '🔄',
        'Voinko perua tai siirtää ajan?',
        'Kyllä — pyydämme vähintään 24 tunnin ilmoituksen peruutuksista tai siirroista.'
      ],
      [
        '💳',
        'Miten maksu tapahtuu?',
        'Maksutiedot toimitetaan varauksen jälkeen. Hyväksymme tilisiirron ja yleiset verkkomaksutavat.'
      ]
    ],
    ctaTitle:'Kysymyksiä hinnoittelusta?',
    ctaText:'Keskustelemme mielellämme vaihtoehdoista. Ota yhteyttä milloin vain.',
    ctaButton:'Ota yhteyttä'
  }
}

export default function Pricing() {
  const { language } = useLanguage()
  const t = content[language]
  const [plans, setPlans] = useState([])

  useEffect(() => {
    pricingService
      .getAll()
      .then(plans => setPlans(plans))
      .catch(err => console.error(err))
  }, [])
  
  return (
    <>
      <PageHero tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((p, index) => {
              const plan = p[language]
              

              if (!plan) {
                return null
              }
              
              let price = `${p.price} €`
              if (p.price === '0' || p.price === 'Free' || p.price === 'Maksuton') {
                price = t.free
              }

              return (
                <div className={`pricing-card ${plan.outline === 'primary' ? 'pricing-card--featured' : ''} fade-in fade-in-delay-${index+1}`} key={p.id}>
                  <h3 className="pricing-card__title">{plan.title}</h3>
                  <p className="pricing-card__desc">{plan.subtitle}</p>
                  <div className="pricing-card__price">
                    {p.price ? price : 'error'} <span>{price === t.free ? '' : t.session}</span>
                  </div>
                  <p className="pricing-card__duration">{p.time} {t.minutes}</p>
                  <ul className="pricing-card__features">
                    {plan.features.map((item) => 
                      <li key={item}>{item}</li>
                    )}
                  </ul>
                  <Link to="/contact" className={`btn ${plan.outline==='primary'?'btn--primary':'btn--outline'}`} style={{ width: '100%', textAlign: 'center' }}>
                    {plan.button}
                  </Link>
                </div>
              )}
            )}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">{t.good}</span>
            <h2 className="section-header__title">{t.faq}</h2>
          </div>
          <div className="values-grid">
            {t.qs.map((q, index) =>
              <div className={`value-card fade-in fade-in-delay-${index+1}`} key={q[1]}>
                <div className="value-card__icon">
                  {q[0]}
                </div>
                <h3>{q[1]}</h3>
                <p>{q[2]}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactBanner title={t.ctaTitle} text={t.ctaText} button={t.ctaButton} />
    </>
  )
}
