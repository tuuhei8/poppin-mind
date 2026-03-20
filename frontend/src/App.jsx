import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import MentalCoaching from './components/pages/MentalCoaching'
import SolutionFocusedCoaching from './components/pages/SolutionFocusedCoaching'
import SolutionFocusedBriefTherapy from './components/pages/SolutionFocusedBriefTherapy'
import AnimalAssistedCoaching from './components/pages/AnimalAssistedCoaching'
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'
//import NotFound from './pages/NotFound'
import { useEffect, useState } from 'react'
import servicesService from './services/services'

//   //   //   //   //   //   //   //   //   //   //  //   //
//
//   This file has been added/adjusted for testing purposes.
//
//   //   //   //   //   //   //   //   //   //   //  //   //

export default function App() {
  const [services, setServicesDB] = useState([])

    useEffect(() => {
      servicesService.getAll().then(services => 
        setServicesDB(services)
      )
    }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home services={services} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services servicesDB={services} />} />
          <Route path="/services/mental-coaching" element={<MentalCoaching />} />
          <Route path="/services/solution-focused-coaching" element={<SolutionFocusedCoaching />} />
          <Route path="/services/solution-focused-brief-therapy" element={<SolutionFocusedBriefTherapy />} />
          <Route path="/services/animal-assisted-coaching" element={<AnimalAssistedCoaching />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
