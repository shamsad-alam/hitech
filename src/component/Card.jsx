import React from 'react'
import { FaStar } from 'react-icons/fa'

function Card() {

    return (
        <>
            <section className='flex-1'>
                <div className='w-full overflow-hidden'>
                    <div className='flex flex-wrap transition-all duration-500'>
                        {
                            allproductList.map((list, index) => (
                                <div key={index} className=' flex-none w-full md:w-1/2 lg:w-1/4 py-3 md:p-3'>
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
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card


const allproductList = [
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_22.jpg', star: <FaStar />, tite: 'Boat New Headphone', mainPrice: '30.00', subPrice: '40.00' },
    { id: 2, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Oppo y91 New Series', mainPrice: '30.00', subPrice: '40.00' },
    { id: 3, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_18.jpg', star: 'start here', tite: 'Technology Drone', mainPrice: '30.00', subPrice: '40.00' },
    { id: 4, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_26.jpg', star: 'start here', tite: 'Sony Ultra Speaker', mainPrice: '30.00', subPrice: '40.00' },
    { id: 5, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_20.jpg', star: 'start here', tite: 'Apple 15  Series', mainPrice: '30.00', subPrice: '40.00' },
    { id: 6, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_24.jpg', star: 'start here', tite: 'Cannon Mini snap', mainPrice: '30.00', subPrice: '40.00' },
    { id: 7, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_28.jpg', star: 'start here', tite: 'Prestige Water Filter', mainPrice: '30.00', subPrice: '40.00' },
    { id: 8, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_16.jpg', star: 'start here', tite: 'Apple ipad 10x', mainPrice: '30.00', subPrice: '40.00' },
    { id: 9, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_22.jpg', star: <FaStar />, tite: 'Boat New Headphone', mainPrice: '30.00', subPrice: '40.00' },
    { id: 10, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg', star: 'start here', tite: 'Oppo y91 New Series', mainPrice: '30.00', subPrice: '40.00' },
    { id: 11, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_18.jpg', star: 'start here', tite: 'Technology Drone', mainPrice: '30.00', subPrice: '40.00' },
    { id: 12, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_26.jpg', star: 'start here', tite: 'Sony Ultra Speaker', mainPrice: '30.00', subPrice: '40.00' },

]
