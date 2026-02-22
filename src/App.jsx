import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Index from './Pages/Index'
import About from './Pages/About'
import Cars from './Pages/Cars'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import CarDetail from './Pages/CarsDetails'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/CarDetail' element={<CarDetail />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
