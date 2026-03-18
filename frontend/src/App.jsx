import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import MentalCoaching from './components/pages/MentalCoaching'
//import SolutionFocusedCoaching from './pages/SolutionFocusedCoaching'
//import SolutionFocusedBriefTherapy from './pages/SolutionFocusedBriefTherapy'
import AnimalAssistedCoaching from './components/pages/AnimalAssistedCoaching'
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'
//import NotFound from './pages/NotFound'

//   //   //   //   //   //   //   //   //   //   //  //   //
//
//   This file has been added/adjusted for testing purposes.
//
//   //   //   //   //   //   //   //   //   //   //  //   //

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/mental-coaching" element={<MentalCoaching />} />
          <Route path="/services/animal-assisted-coaching" element={<AnimalAssistedCoaching />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
