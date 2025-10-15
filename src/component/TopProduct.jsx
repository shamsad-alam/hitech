import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";



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
                    <div className='grid lg:grid-cols-7 items-center justify-between gap-4 mb-5'>
                        <h2 className='text-2xl font-semibold' ><span className='text-[#ff3333]'>Top</span> Products</h2>
                        <div className=' md:col-span-5 border-b-1 border-zinc-400'></div>
                        <div className='ml-auto flex gap-3 '>
                            <button onClick={handleLeft} className='cursor-pointer'><FaChevronLeft /></button>
                            <button onClick={handleRight} className='cursor-pointer'><FaChevronRight /></button>
                        </div>
                    </div>

                    <div className='overflow-hidden'>
                        <div className='flex transition-all duration-500' style={{ transform: `translateX(-${(cardindex * 100) / cardResponsive}%)` }}>
                            {
                                productList.map((list, index) => (
                                    <div key={index} className=' flex-none w-full md:w-1/2 lg:w-1/5 p-3'>
                                        <div className='bg-white flex flex-col items-center shadow-md rounded-lg p-4'>
                                            <div className='border-b-1 pb-3 border-gray-200'>
                                                <img src={list.image} alt="" />
                                            </div>
                                            <span className='mt-6 flex text-sm text-red-600 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </span>
                                            <h3 className='text-xl font-semibold  my-2'>{list.tite} </h3>
                                            <div className='flex gap-2'>
                                                <span className='text-[#ff3333] font-semibold'>{list.mainPrice} </span>
                                                <span className='text-gray-500 line-through'>{list.subPrice} </span>
                                            </div>
                                        </div>
                                    </div>
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

const productList = [
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_22.jpg', star: <FaStar />, tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_18.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_20.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_22.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Smart Watch black', mainPrice: '30.00', subPrice: '40.00' },
]

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

export default TopProduct
