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
import ProductListSam from './practice/samproduct/ProductListSam'
import ProductDetailsSam from './practice/samproduct/ProductDetailsSam'
import ProductDetails from './pages/ProductDetails'
import ProductList from './pages/ProductList'

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <LayoutDesign />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/products', element: <ProductList /> },
        { path: '/about', element: <AboutPages /> },
        { path: '/blog', element: <BlogPage /> },
        { path: '/products/:id', element: <ProductDetails /> },
        { path: '/pages/cart', element: <Cart /> },
        { path: '/pages/login', element: <LoginPage /> },

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routers} />


      {/* <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductListSam />} />
            <Route path='/products/:id' element={<ProductDetailsSam />} />

          </Routes>
        </BrowserRouter>
      </div> */}
    </div>
  )
}

export default App
