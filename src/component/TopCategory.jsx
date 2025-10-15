import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function TopCategory() {
    const topCatList = [
        { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_5.jpg', title: 'Smart Watch' },
        { id: 2, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_2.jpg', title: 'Smart Watch' },
        { id: 3, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_5.jpg', title: 'Smart Watch' },
        { id: 4, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_5.jpg', title: 'Smart Watch' },
        { id: 5, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_7.jpg', title: 'Smart Watch' },
        { id: 6, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_5.jpg', title: 'Smart Watch' },
        { id: 7, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_4.jpg', title: 'Smart Watch' },
        { id: 8, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_4.jpg', title: 'Smart Watch' },
        { id: 9, image: 'https://dostguru.com/HTML/hitech/assets/img/category/category_4.jpg', title: 'Smart Watch' },

    ]

    const [index, setindex] = useState(0)

    const visibleCard = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 7

    const handleNext = () => {
        if (index + visibleCard < topCatList.length) {
            setindex(index + 1)
        }
    }
    const handlePrev = () => {
        if (index > 0) {
            setindex(index - 1)
        }
    }

    return (
        <>
            <div className='w-[90%] mx-auto my-10'>
                <div className='grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4 mb-5'>
                    <h2 className='text-2xl col-span-8 lg:col-span-2 -order-2 font-semibold' ><span className='text-[#ff3333]'>Top </span> Categories</h2>
                    <div className='col-span-9 border-b-1 border-zinc-400'></div>
                    <div className='relative flex gap-4 justify-end -order-1 md:order-1'>
                        <button onClick={handlePrev} className='cursor-pointer'><FaChevronLeft /></button>
                        <button onClick={handleNext} className='cursor-pointer'><FaChevronRight /></button>
                    </div>
                </div>

                <div className='overflow-hidden'>
                    <div className='flex  transition-all duration-500' style={{ transform: `translateX(-${(index * 100) / visibleCard}%)` }}>
                        {topCatList.map((list) => (
                            <div key={list.id} className='flex-none w-full md:w-1/2 lg:w-1/7 p-2 my-5'>
                                <div className='flex flex-col items-center gap-3 p-4 shadow-sm rounded-xl'>
                                    <img src={list.image} alt="" />
                                    <h3>{list.title} </h3>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default TopCategory
