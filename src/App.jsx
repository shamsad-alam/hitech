import React from 'react'
import HomePage from './pages/HomePage'
import CardSlider from './practice/CardSlider'
import Testimonial from './practice/Testimonial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import ContactPages from './pages/ContactPages'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPages />} />
          <Route path='/contact' element={<ContactPages />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>



      {/* Practice perpus */}
      {/* <CardSlider /> */}
      {/* <Testimonial /> */}

    </div>
  )
}

export default App
