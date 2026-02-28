import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Index from './Pages/Index'
import About from './Pages/About'
import Cars from './Pages/Cars'
import Contact from './Pages/Contact'
import CarDetail from './Pages/CarsDetails'
import Footer from './Components/Footer'

// legal pages
// Note: We use the name on the left (e.g., LegalTerms) inside the Routes below
import LegalTerms from './Pages/Legal Terms'
import CookieNode from './Pages/Cookie Node'
import DataPrivacy from './Pages/Data Privacy'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {/* Main Pages */}
          <Route path='/' element={<Index />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/contact' element={<Contact />} />

          {/* Legal Pages - Names here must match the imports above */}
          <Route path='/terms' element={<LegalTerms />} />
          <Route path='/privacy' element={<DataPrivacy />} />
          <Route path='/cookies' element={<CookieNode />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App