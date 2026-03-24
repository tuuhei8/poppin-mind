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
import NotFound from './components/pages/NotFound'
import { useEffect, useState } from 'react'
import servicesService from './services/services'

//   //   //   //   //   //   //   //   //   //   //  //   //
//
//   This file has been added/adjusted for testing purposes.
//
//   //   //   //   //   //   //   //   //   //   //  //   //

export default function App() {
  const [services, setServices] = useState([
    {
      icon: '🧠',
      title: 'Mental Coaching',
      desc: 'Develop mental strength, improve focus, and build a resilient mindset that supports you in everyday life and beyond. Mental coaching helps you understand your thought patterns and reshape them into powerful tools for growth.',
      link: '/services/mental-coaching',
    },
    {
      icon: '🎯',
      title: 'Solution-Focused Coaching',
      desc: 'Instead of dwelling on problems, solution-focused coaching directs your energy toward the future you want. Together, we identify your goals, recognise your existing strengths, and create practical steps forward.',
      link: '/services/solution-focused-coaching',
    },
    {
      icon: '💬',
      title: 'Solution-Focused Brief Therapy',
      desc: 'A structured, short-term therapeutic approach that helps you create meaningful change in a focused timeframe. Ideal for those seeking professional support without long-term commitment.',
      link: '/services/solution-focused-brief-therapy',
    },
    {
      icon: '🐾',
      title: 'Animal-Assisted Coaching',
      desc: 'Animals have a unique ability to help us feel present, calm, and connected. In animal-assisted sessions, working alongside animals becomes a catalyst for insight, emotional awareness, and personal growth.',
      link: '/services/animal-assisted-coaching',
    },
  ])

    useEffect(() => {
      servicesService
      .getAll()
      .then(services => setServices(services))
      .catch(err => console.error(err))
    }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home services={services} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/services/mental-coaching" element={<MentalCoaching />} />
          <Route path="/services/solution-focused-coaching" element={<SolutionFocusedCoaching />} />
          <Route path="/services/solution-focused-brief-therapy" element={<SolutionFocusedBriefTherapy />} />
          <Route path="/services/animal-assisted-coaching" element={<AnimalAssistedCoaching />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
