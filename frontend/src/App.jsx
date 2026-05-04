import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Service from './pages/Service'
import servicesService from './services/services'
import { useEffect, useState } from 'react'

export default function App() {
  const [serviceLinks, setServiceLinks] = useState([])
  
  useEffect(() => {
    servicesService.getLinks()
      .then(links => setServiceLinks(links))
      .catch(err => console.error(err))
    }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout serviceLinks={serviceLinks} />}>
          <Route path="/" element={<Home serviceLinks={serviceLinks} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services serviceLinks={serviceLinks} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact services={serviceLinks} />} />
          <Route path="/services/:path" element={<Service />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}
