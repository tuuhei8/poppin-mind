import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import MentalCoaching from './pages/MentalCoaching'
import SolutionFocusedCoaching from './pages/SolutionFocusedCoaching'
import SolutionFocusedBriefTherapy from './pages/SolutionFocusedBriefTherapy'
import AnimalAssistedCoaching from './pages/AnimalAssistedCoaching'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
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
