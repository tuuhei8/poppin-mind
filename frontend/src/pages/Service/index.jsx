import ContentBlock from './components/ContentBlock'
import ContentBlockReverse from './components/ContentBlockReverse'
import ContactBanner from '../../components/ContactBanner'
import { useLanguage } from '../../context/LanguageContext'
import NotFound from '../NotFound'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import servicesService from '../../services/services'

export default function Service() {
  const { language } = useLanguage()
  const path = useParams().path
  const [serviceObject, setServiceObject] = useState({})

  useEffect(() => {
    servicesService
      .getServiceByPath(path)
      .then(serviceObject => setServiceObject(serviceObject))
      .catch(err => console.error(err))
  }, [path])

  let service
  try {
    service = serviceObject[language]
  } catch (error) {
    console.error(error)
  }

  if (!service || !serviceObject) {
    return <NotFound />
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">{service.tag}</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">{service.title}</h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">{service.subtitle}</p>
        </div>
      </section>

      <ContentBlock content={service.what} />
      <ContentBlockReverse content={service.how} />
      <ContentBlock content={service.who} />

      <ContactBanner title={service.contactBannerTitle} text={service.contactBannerText} button={service.contactBannerButton} />
    </>
  )
}