import React from 'react'
import HomePage from './pages/HomePage'
import CardSlider from './practice/CardSlider'
import Testimonial from './practice/Testimonial'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import ErrorPage from './pages/ErrorPage'
import LayoutDesign from './UiLayout/LayoutDesign'

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <LayoutDesign />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/about', element: <AboutPages /> },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider  router={routers}/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutDesign />} >
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPages />} />
            <Route path='/contact' element={<ContactPages />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}



      {/* Practice perpus */}
      {/* <CardSlider /> */}
      {/* <Testimonial /> */}

    </div>
  )
}

export default App
