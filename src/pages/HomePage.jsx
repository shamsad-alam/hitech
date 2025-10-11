import React from 'react'
import Navbar from '../component/Navbar'
import ServiceCard from '../component/ServiceCard'
import SpecialOfferCard from '../component/SpecialOfferCard'
import SpecialProduct from '../component/SpecialProduct'

function HomePage() {
    return (
        <div className='bg-gray-50'>
            {/* <Navbar /> */}
            <ServiceCard />
            <SpecialOfferCard />
            <SpecialProduct />
        </div>
    )
}

export default HomePage
