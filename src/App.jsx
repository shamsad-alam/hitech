import React from 'react'
import HomePage from './pages/HomePage'
import CardSlider from './practice/CardSlider'
import Testimonial from './practice/Testimonial'

function App() {
  return (
    <div>
      <HomePage />


      {/* Practice perpus */}
      <hr /> <hr /> <hr />
      <CardSlider />
      <hr /> <hr />
      <Testimonial />

    </div>
  )
}

export default App
