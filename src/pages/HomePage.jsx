import React from 'react'
import ServiceCard from '../component/ServiceCard'
import SpecialOfferCard from '../component/SpecialOfferCard'
import SpecialProduct from '../component/SpecialProduct'
import TopProduct from '../component/TopProduct'
import TopCategory from '../component/TopCategory'
import LaptopComputer from '../component/LaptopComputer'
import Blog from '../component/Blog'
import ProductDetails from './ProductDetails'
import CameraBlutooth from '../component/CameraBlutooth'
import Carousel from '../component/Carousel'
import Smartwatch from '../component/SmartWatch'
import Card from '../component/Card'

function HomePage() {
    return (
        <div className='bg-gray-50'>
            <Carousel />
            <ServiceCard />
            <SpecialOfferCard />
            {/* <SpecialProduct /> */}

            <TopProduct />
            <TopCategory />
            <LaptopComputer />
            <CameraBlutooth />
            <Smartwatch />

            <Blog />

            {/* <ProductDetails /> */}

        </div>
    )
}

export default HomePage
