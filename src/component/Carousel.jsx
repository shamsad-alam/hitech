import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";



function Carousel() {
    const [bannerIndex, setbannerIndex] = useState(0)
    const [active, setactive] = useState(false)

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
                        <div className='flex flex-1/4 bg-white shadow-md rounded-md'>
                            <div className='w-full relative'>
                                <div className='flex items-center gap-2 bg-red-500 text-white p-3 rounded-md cursor-pointer'>
                                    <span className='text-xl'><HiMenuAlt2 /></span>
                                    <h3 className='font-semibold'>Shop by Categeory</h3>
                                </div>
                                <div className='mt-4 flex flex-col bg-white rounded-md shadow-sm gap-3 absolute left-0 right-0 z-10'>
                                    {categeoryDetail.map((cate, index) => (
                                        <div key={index} className='group'>
                                            <h3 className='px-3 py-2 font-semibold shadow-md/10 rounded-md cursor-pointer transition-all duration-500
                                             hover:bg-yellow-500 hover:text-white' onClick={()=> setactive(!active)}>
                                                {cate.title}
                                            </h3>
                                            <div className='max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500'>
                                                {cate.subCategeory.map((subCate, subIndex) => (
                                                    <div key={subIndex} className='px-6 py-1 hover:text-red-500 cursor-pointer'>{subCate}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Carousel banner */}
                        <div className='w-full overflow-hidden'>
                            <div className='relative'>
                                <div className='flex transition-all duration-500' style={{ transform: `translateX(-${bannerIndex * (100)}%)` }}>
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
                </div>
            </section>
        </>
    )
}

export default Carousel

const categeoryDetail = [
    {
        title: "Smartphones & Tablets",
        subCategeory: [
            "All Smartphones",
            "All Tablets",
            "Smartphone Accessories",
            "Tablet Accessories"
        ]
    },
    {
        title: "Computers & Laptop",
        subCategeory: [
            "All Computers",
            "All Laptops",
            "Computer Accessories",
            "Laptop Accessories"
        ]
    },
    {
        title: "TV & Audio",
        subCategeory: [
            "All TVs",
            "All Audio Systems",
            "TV Accessories",
            "Audio Accessories"
        ]
    },
    {
        title: "Cameras & Photography",
        subCategeory: [
            "All Cameras",
            "All Photography Equipment",
            "Camera Accessories",
            "Photography Accessories"
        ]
    },
    {
        title: "Headphones",
        subCategeory: [
            "All Headphones",
            "Wireless Headphones",
            "Wired Headphones",
            "Headphone Accessories"
        ]
    },
    {
        title: "Wearable Technology",
        subCategeory: [
            "All Wearables",
            "Smartwatches",
            "Fitness Trackers",
            "Wearable Accessories"
        ]
    },
    {
        title: "Gaming Consoles",
        subCategeory: [
            "All Gaming Consoles",
            "Console Accessories",
            "Games & Software"
        ]
    },
    {
        title: "Accessories",
        subCategeory: [
            "Chargers & Cables",
            "Cases & Covers",
            "Screen Protectors",
            "Other Accessories"
        ]
    }
];