import React from 'react'
import HomePage from './pages/HomePage'
import CardSlider from './practice/CardSlider'
import Testimonial from './practice/Testimonial'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import ErrorPage from './pages/ErrorPage'
import LayoutDesign from './UiLayout/LayoutDesign'
import Cart from './pages/Cart'
import BlogPage from './pages/BlogPage'
import LoginPage from './pages/LoginPage'

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <LayoutDesign />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/about', element: <AboutPages /> },
        { path: '/cart', element: <Cart /> },
        { path: '/blog', element: <BlogPage /> },
        { path: '/pages/login', element: <LoginPage /> }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
