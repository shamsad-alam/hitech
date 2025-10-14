import React, { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

function TopCategory() {
    const sliderRef = useRef(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // default arrow hide
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    const nextSlide = () => {
        sliderRef.current.slickNext(); // 👈 Next button click
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev(); // 👈 Prev button click
    };

    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div>
                    <div className='grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4 mb-5'>
                        <h2 className='text-2xl col-span-8 lg:col-span-2 -order-2 font-semibold' ><span className='text-[#ff3333]'>Special</span> Products</h2>
                        <div className='col-span-9 border-b-1 border-zinc-400'></div>
                        <div className='relative flex gap-4 justify-end -order-1 md:order-1'>
                            <button onClick={prevSlide} ><FaChevronLeft /></button>
                            <button onClick={nextSlide} ><FaChevronRight /></button>
                        </div>
                    </div>

                    {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6'>
                        {
                            visibleTestimonials.map((catlist) => (
                                <div key={catlist.id} className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                                    <div className='mb-3'>
                                        <img src={catlist.image} alt="" />
                                    </div>
                                    <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>{catlist.title} </h3>
                                </div>
                            ))
                        }
                    </div> */}

                    <Slider {...settings}>
                        {
                            topCatList.map((catlist) => (
                                <div key={catlist.id} className='w-full bg-white flex flex-col items-center justify-center shadow-lg rounded-lg p-3'>
                                    <div className='mb-3'>
                                        <img src={catlist.image} alt="" />
                                    </div>
                                    <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>{catlist.title} </h3>
                                </div>
                            ))
                        }
                    </Slider>


                </div>
            </div>
        </>
    )
}

export default TopCategory


