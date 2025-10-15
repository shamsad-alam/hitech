import React from 'react'
import Navbar from '../component/Navbar'
import ServiceCard from '../component/ServiceCard'
import SpecialOfferCard from '../component/SpecialOfferCard'
import SpecialProduct from '../component/SpecialProduct'
import TopProduct from '../component/TopProduct'
import TopCategory from '../component/TopCategory'
import LaptopComputer from '../component/LaptopComputer'
import Blog from '../component/Blog'
import Footer from '../component/Footer'
import ProductDetails from './ProductDetails'

function HomePage() {
    return (
        <div className='bg-gray-50'>
            {/* <Navbar /> */}
            <ServiceCard />
            <SpecialOfferCard />
            {/* <SpecialProduct /> */}

            <TopProduct />
            <TopCategory />
            <LaptopComputer />
            {/* Copy LaptopComputer component and Add more Section  */}

            {/* <Blog />
            <Footer /> */}

            {/* <ProductDetails /> */}


        </div>
    )
}

export default HomePage
