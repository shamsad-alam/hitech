import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Carousel() {
    const [bannerIndex, setbannerIndex] = useState(0)

    const handlePrev = () => {
        if (bannerIndex > 0) {
            setbannerIndex(bannerIndex - 1)
        }
    }
    const handleNext = () => {
        if (bannerIndex < 2) {
            setbannerIndex(bannerIndex + 1)
        }
    }
    return (
        <>
            <section>
                <div className='w-[90%] mx-auto pb-10 pt-8 '>
                    <div className='md:flex gap-5'>
                        {/* Aside menu (categeory) */}
                        <div className='flex flex-1/4 bg-amber-100 rounded-md'>h</div>

                        {/* Carousel banner */}
                        <div className='w-full relative overflow-hidden'>
                            <div className='flex transition-all duration-500' style={{transform : `translateX(-${bannerIndex * (100)}%)`}}>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/s2.jpg" alt="" />
                                <img src="https://dostguru.com/HTML/hitech/assets/img/s1.jpg" alt="" />
                                <img src="https://dostguru.com/HTML/hitech/assets/img/s3.jpg" alt="" />
                            </div>
                            <div className='flex gap-2 absolute md:bottom-3 bottom-2 left-1/2 transform -translate-x-1/2  md:text-xl text-sm font-semibold text-zinc-300'>
                                <button onClick={handlePrev} className='cursor-pointer'><FaChevronLeft /></button>
                                <button onClick={handleNext} className='cursor-pointer'><FaChevronRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carousel
