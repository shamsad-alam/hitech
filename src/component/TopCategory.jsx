import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


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

    const [current, setcurrent] = useState(0)

    const handleright = () => {
        if (current + 7 < topCatList.length) {
            setcurrent(current + 1)
        }
    }
    const handleleft = () => {
        if (current > 0) {
            setcurrent(current - 1)
        }
    }

    const visibleTestimonials = topCatList.slice(current, current + 7);

    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div>
                    <div className='grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4 mb-5'>
                        <h2 className='text-2xl col-span-8 lg:col-span-2 -order-2 font-semibold' ><span className='text-[#ff3333]'>Special</span> Products</h2>
                        <div className='col-span-9 border-b-1 border-zinc-400'></div>
                        <div className='flex gap-4 justify-end -order-1 md:order-1'>
                            <button onClick={handleleft} disabled={handleleft == 0} ><FaChevronLeft /></button>
                            <button onClick={handleright} disabled={handleright + 7 >= topCatList.length}><FaChevronRight /></button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6'>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCategory


