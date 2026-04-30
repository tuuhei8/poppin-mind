import ContentBlock from './components/ContentBlock'
import ContentBlockReverse from './components/ContentBlockReverse'
import ContactBanner from '../../components/ContactBanner'
import { useLanguage } from '../../context/LanguageContext'
import NotFound from '../NotFound'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import servicesService from '../../services/services'
import PageHero from '../../components/PageHero'

const content = {
  en: {
    tag: 'Service'
  },
  fi: {
    tag: 'Palvelu'
  }
}

export default function Service() {
  const { language } = useLanguage()
  const t = content[language]
  const path = useParams().path
  const [serviceObject, setServiceObject] = useState({})

  useEffect(() => {
    setServiceObject({})
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

  if (!service) {
    return <NotFound />
  }

  return (
    <>
      <PageHero tag={t.tag} title={service.title} subtitle={service.subtitle} />

      <ContentBlock content={service.what} />
      <ContentBlockReverse content={service.how} />
      <ContentBlock content={service.who} />

      <ContactBanner title={service.contactBannerTitle} text={service.contactBannerText} button={service.contactBannerButton} />
    </>
  )
}