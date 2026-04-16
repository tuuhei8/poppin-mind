import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/PageHero'

const content = {
  en: {
    tag: 'Contact',
    title: 'Get in touch',
    subtitle: 'Whether you have a question or you are ready to book a session, we would love to hear from you.',
    successTitle: 'Thank you for reaching out',
    successText: 'Your message has been sent.',
    name: 'Your Name',
    namePh: 'e.g. Alex Jansen',
    email: 'Email Address',
    emailPh: 'alex@example.com',
    phone: 'Phone (optional)',
    phonePh: '+358 40 123 4567',
    service: 'Interested In',
    select: 'Select a service (optional)',
    notSure: 'I am not sure yet',
    message: 'Your Message',
    messagePh: 'Tell us a little about what you are looking for, or ask any questions you have...',
    send: 'Send Message',
    privacyTitle: 'Your Privacy Matters',
    privacyText: 'Everything you share with us — in this form and in our sessions — is treated with the highest level of confidentiality. You can speak freely and feel safe.',
    locationTitle: '📍 Location',
    locationText: 'Sessions available online and in person. Contact us for details on location.',
    responseTitle: '⏰ Response Time',
    responseText: 'We aim to reply within 24–48 hours.'
},
  fi: {
    tag: 'Yhteystiedot',
    title: 'Ota yhteyttä',
    subtitle: 'Olipa sinulla kysymys tai olet valmis varaamaan ajan, kuulemme sinusta mielellämme.',
    successTitle: 'Kiitos yhteydenotostasi',
    successText: 'Viestisi on lähetetty.',
    name: 'Nimesi',
    namePh: 'esim. Alex Jansen',
    email: 'Sähköpostiosoite',
    emailPh: 'alex@example.com',
    phone: 'Puhelin (valinnainen)',
    phonePh: '+358 40 123 4567',
    service: 'Kiinnostuksen kohde',
    select: 'Valitse palvelu (valinnainen)',
    notSure: 'En ole vielä varma',
    message: 'Viestisi',
    messagePh: 'Kerro lyhyesti mitä etsit tai kysy mitä tahansa mielessäsi on...',
    send: 'Lähetä viesti',
    privacyTitle: 'Yksityisyytesi on tärkeä',
    privacyText: 'Kaikki, mitä jaat kanssamme — tässä lomakkeessa ja tapaamisissa — käsitellään erittäin luottamuksellisesti. Voit puhua vapaasti ja turvallisesti.',
    locationTitle: '📍 Sijainti',
    locationText: 'Tapaamiset onnistuvat verkossa ja paikan päällä. Ota yhteyttä saadaksesi lisätietoja sijainnista.',
    responseTitle: '⏰ Vastausaika',
    responseText: 'Pyrimme vastaamaan 24–48 tunnin kuluessa.'
  }
}

function ServiceList({ services }) {
  const { language } = useLanguage()

  return (
    <>
      {services.map(s => {
        const service = s[language]

        if (!service) {
          return null
        }

        return (
          <option key={service.title} value={service.title}>{service.title}</option>
        )}
      )}
    </>
  )
}

export default function Contact({ services }) {
  const { language } = useLanguage()
  const t = content[language]
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [error, setError] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    formData.append("access_key", /*ACCESS_KEY_HERE*/)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json()

    if (data.success) {
      setSubmitted(true)
    } else {
      console.log("Error", data);
      setError(`Error: ${data.message}`);
      setTimeout(() => setError(null), 20000)
    }
  }

  return (
    <>
      <PageHero tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            <div className="fade-in fade-in-delay-1">
              {submitted 
                ? <div className="trust-badge">
                    <div className="trust-badge__icon">
                      ✅
                    </div>
                    <h3>{t.successTitle}</h3>
                    <p>{t.successText}</p>
                  </div>
                : <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">{t.name}</label>
                      <input id="name" name="name" type="text" placeholder={t.namePh} value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t.email}</label>
                      <input id="email" name="email" type="email" placeholder={t.emailPh} value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t.phone}</label>
                      <input id="phone" name="phone" type="tel" placeholder={t.phonePh} value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">{t.service}</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">{t.select}</option>
                        <ServiceList services={services} />
                        <option value={t.notSure}>{t.notSure}</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">{t.message}</label>
                      <textarea id="message" name="message" placeholder={t.messagePh} value={form.message} onChange={handleChange} required />
                    </div>
                    <span style={ {color: 'red'} }>{error}</span>
                    <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>{t.send}</button>
                  </form>
              }
            </div>

            <div className="contact-info fade-in fade-in-delay-2">
              <div className="trust-badge">
                <div className="trust-badge__icon">
                  🔒
                </div>
                <h3>{t.privacyTitle}</h3>
                <p>{t.privacyText}</p>
              </div>
              <div className="contact-info__card">
                <h3>📧 Email</h3>
                <p>info@poppinmind.com</p>
              </div>
              <div className="contact-info__card">
                <h3>{t.locationTitle}</h3>
                <p>{t.locationText}</p>
              </div>
              <div className="contact-info__card">
                <h3>{t.responseTitle}</h3>
                <p>{t.responseText}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
