import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// import OfferTimer from './OfferTimmer'

const cardData = [
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg', star: 'star Here', title: 'Smart Watch Black', mainPrice: '$30.00', subPrice: '$40.00' },
    { id: 2, image: 'https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg', star: 'star Here', title: 'Smart Watch Black', mainPrice: '$30.00', subPrice: '$40.00' },
    { id: 3, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_6.jpg', star: 'star Here', title: 'Smart Watch Black', mainPrice: '$30.00', subPrice: '$40.00' },
    { id: 4, image: 'https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg', star: 'star Here', title: 'Smart Watch Black', mainPrice: '$30.00', subPrice: '$40.00' },
    { id: 5, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_8.jpg', star: 'star Here', title: 'Smart Watch Black', mainPrice: '$30.00', subPrice: '$40.00' },

]

function SpecialProduct() {

    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div>
                        <div className='grid  lg:grid-cols-3 items-center gap-4 mb-5'>
                            <h2 className='text-2xl font-semibold' ><span className='text-[#ff3333]'>Deal</span> Of The Day</h2>
                            <div className='col-span-2 border-b-1 border-zinc-400'></div>
                        </div>
                        <div className='grid lg:grid-cols-2 justify-center items-center bg-white min-h-94 shadow-lg rounded-lg p-6'>
                            <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" className='w-full lg:w-70' alt="" />
                            <div >
                                <div className='border-b-1 border-gray-300 pb-2'>
                                    <h2 className='text-xl'>Monster Speaker 50DB Volume</h2>
                                    <h2 className='text-xl py-2'>$20.00 <span className='text-[16px] text-gray-500 line-through '>30.00</span></h2>
                                </div>
                                <p className='text-[16px] text-gray-500 my-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, fugiat.</p>
                                <div className='flex flex-col gap-2 my-2'>
                                    <p className='text-xl '>Available : 200</p>
                                    <div className='w-full bg-gray-200 h-2.5 rounded-full'>
                                        <div className='bg-[#ff3333] h-2.5 rounded-full w-[70%]'></div>
                                    </div>
                                </div>
                                <div className='w-[70%] grid grid-cols-3 gap-3 mt-4'>
                                    {/* <OfferTimer /> */}
                                    <div className="flex flex-col items-center  bg-gray-100 text-[#ff3333] px-4 py-2 rounded-md ">
                                        <h3 className='text-xl'>05</h3>
                                        <span className='text-sm text-gray-600'>Hours</span>
                                    </div>
                                    <div className="flex flex-col items-center  bg-gray-100 text-[#ff3333] px-4 py-2 rounded-md ">
                                        <h3 className='text-xl'>35</h3>
                                        <span className='text-sm text-gray-600'>Mnt</span>
                                    </div>
                                    <div className="flex flex-col items-center  bg-gray-100 text-[#ff3333] p-2 rounded-md ">
                                        <h3 className='text-xl'>58</h3>
                                        <span className='text-sm text-gray-600'>Sec</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-cols-3 md:grid-cols-9 items-center justify-between gap-4 mb-5'>
                            <h2 className='text-2xl col-span-3 -order-2 font-semibold' ><span className='text-[#ff3333]'>Special</span> Products</h2>
                            <div className='col-span-5 border-b-1 border-zinc-400'></div>
                            <div className='flex gap-4 justify-end -order-1 md:order-1'>
                                <button ><FaChevronLeft /></button>
                                <button ><FaChevronRight /></button>
                            </div>
                        </div>

                        {/* <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-94 gap-6'>
                            <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 pb-3 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <span className='mt-5'>star here</span>
                                <h3 className='text-xl  my-1'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 pb-3 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <span className='mt-5'>star here</span>
                                <h3 className='text-xl  my-1'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 pb-3 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <span className='mt-5'>star here</span>
                                <h3 className='text-xl  my-1'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 pb-3 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <span className='mt-5'>star here</span>
                                <h3 className='text-xl  my-1'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-94 gap-6'>
                            {
                                cardData.map((Cdata) => (
                                    <div key={Cdata.id} className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                        <div className='border-b-1 pb-3 border-gray-200'>
                                            <img src={Cdata.image} alt="" />
                                        </div>
                                        <span className='mt-5'>{Cdata.star} </span>
                                        <h3 className='text-xl  my-1'>{Cdata.title} </h3>
                                        <div className='flex gap-2'>
                                            <span className='text-[#ff3333] font-semibold'>{Cdata.mainPrice} </span>
                                            <span className='text-gray-500 line-through'>{Cdata.subPrice}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* <div className='flex w-full overflow-hidden min-h-94'>
                            <div className='flex gap-3 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${next * 31.10}%)` }}>
                                {
                                    cardData.map((cards) => (
                                        <div key={cards.id} className='bg-white flex-[0_0_100%] lg:flex-[0_0_29.50%] p-4  shrink-0 shadow-lg rounded-lg'>
                                            <div className='border-b-1 pb-3 border-gray-200'>
                                                <img src={cards.image} alt="" />
                                            </div>
                                            <span className='mt-5'>{cards.star}</span>
                                            <h3 className='text-xl  my-1'>{cards.title}</h3>
                                            <div className='flex gap-2'>
                                                <span className='text-[#ff3333] font-semibold'>{cards.mainPrice}</span>
                                                <span className='text-gray-500 line-through'>{cards.subPrice}</span>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default SpecialProduct
