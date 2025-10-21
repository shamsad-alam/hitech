import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function TopProduct() {
    const [cardindex, setcardindex] = useState(0)

    const cardResponsive = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 5

    const handleLeft = () => {
        if (cardindex > 0) {
            setcardindex(cardindex - 1)
        }

    }
    const handleRight = () => {
        if (cardindex + cardResponsive < productList.length) {
            setcardindex(cardindex + 1)
        }

    }

    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div>
                    <div className='grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4 mb-5'>
                        <h2 className='text-2xl col-span-7 lg:col-span-3 -order-2 font-semibold' ><span className='text-[#ff3333]'>Top </span> Products</h2>
                        <div className='col-span-8 border-b-1 border-zinc-400'></div>
                        <div className='relative flex gap-4 justify-end -order-1 md:order-1'>
                            <button onClick={handleLeft} className='cursor-pointer'><FaChevronLeft /></button>
                            <button onClick={handleRight} className='cursor-pointer'><FaChevronRight /></button>
                        </div>
                    </div>

                    <div className='overflow-hidden'>
                        <div className='flex transition-all duration-500' style={{ transform: `translateX(-${(cardindex * 100) / cardResponsive}%)` }}>
                            {
                                productList.map((list, index) => (
                                    <Link to={`products/${list.id}`} key={index} className=' flex-none w-full md:w-1/2 lg:w-1/5 p-3'>
                                        <div className='bg-white flex flex-col items-center shadow-md rounded-lg p-4'>
                                            <div className='border-b-1 pb-3 border-gray-200'>
                                                <img src={list.image} alt="" />
                                            </div>
                                            <span className='mt-6 flex text-sm text-red-600 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </span>
                                            <h3 className='text-md font-semibold  my-2'>{list.tite} </h3>
                                            <div className='flex gap-2'>
                                                <span className='text-[#ff3333] font-semibold'>{list.mainPrice} </span>
                                                <span className='text-gray-500 line-through'>{list.subPrice} </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

            <SpecialTwoCard />
        </>
    )
}

export default TopProduct


const productList = [
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_22.jpg', star: <FaStar />, tite: 'Boat New Headphone', mainPrice: '30.00', subPrice: '40.00' },
    { id: 2, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Oppo y91 New Series', mainPrice: '30.00', subPrice: '40.00' },
    { id: 3, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_18.jpg', star: 'start here', tite: 'Technology Drone', mainPrice: '30.00', subPrice: '40.00' },
    { id: 4, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_26.jpg', star: 'start here', tite: 'Sony Ultra Speaker', mainPrice: '30.00', subPrice: '40.00' },
    { id: 5, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_20.jpg', star: 'start here', tite: 'Apple 15  Series', mainPrice: '30.00', subPrice: '40.00' },
    { id: 6, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_24.jpg', star: 'start here', tite: 'Cannon Mini snap', mainPrice: '30.00', subPrice: '40.00' },
    { id: 7, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_28.jpg', star: 'start here', tite: 'Prestige Water Filter', mainPrice: '30.00', subPrice: '40.00' },
    { id: 8, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_16.jpg', star: 'start here', tite: 'Apple ipad 10x', mainPrice: '30.00', subPrice: '40.00' },
]

// special card  new section 
function SpecialTwoCard() {
    return (
        <>
            <div className='w-[90%] grid lg:grid-cols-2 gap-10 mx-auto py-10'>
                <img src="https://dostguru.com/HTML/hitech/assets/img/ban1.jpg" alt="" />
                <img src="https://dostguru.com/HTML/hitech/assets/img/ban2.jpg" alt="" />
            </div>
        </>
    )
}