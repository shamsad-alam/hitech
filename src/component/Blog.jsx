import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Blog() {
    const [bindex, setbindex] = useState(0)

    const responsiveNum = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3

    const handleNext = () => {
        if (bindex + responsiveNum < blogList.length) {
            setbindex(bindex + 1)
        }
    };
    const handlePrev = () => {
        if (bindex > 0) {
            setbindex(bindex - 1)
        }
    };
    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                {/* blog section here */}
                <div>
                    {/* header section here */}
                    <div className='grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4 mb-5'>
                        <h2 className='text-2xl col-span-7 lg:col-span-3 -order-2 font-semibold' ><span className='text-[#ff3333]'>Our </span> Blog</h2>
                        <div className='col-span-8 border-b-1 border-zinc-400'></div>
                        <div className='relative flex gap-4 justify-end -order-1 md:order-1'>
                            <button onClick={handlePrev} className='cursor-pointer'><FaChevronLeft /></button>
                            <button onClick={handleNext} className='cursor-pointer'><FaChevronRight /></button>
                        </div>
                    </div>

                    {/* blog section here */}
                    <div className='overflow-hidden'>
                        <div className='flex transition-all duration-500 ease-in-out' style={{ transform: `translateX(-${(bindex * 100) / responsiveNum}%)` }}>
                            {blogList.map((list, index) => (
                                <div key={index} className='flex-none w-full md:w-1/2 lg:w-1/3 p-3'>
                                    <div className='bg-white rounded-md shadow-md'>
                                        <div className=''>
                                            <img src={list.image} alt="" />
                                        </div>
                                        <div className='p-5'>
                                            <h3 className='text-xl  mb-2'>{list.title} </h3>
                                            <p className='text-gray-500 text-sm mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                            <button className='px-5 py-2 mb-3 rounded-md bg-red-600 text-white text-md hover:bg-red-700 cursor-pointer'>Read More</button>
                                            <div className='w-full border-t-1 border-gray-200 pt-3'>
                                                <span className='text-sm text-gray-500'>By Admin</span> <span className='mx-2'>|</span> <span className='text-sm text-gray-500'>21st June, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Newsletter section  call here */}
            <NewsLetter />
        </>
    )
}

function NewsLetter() {
    return (
        <>
            {/* Newsletter section  making */}
            <div className='w-full bg-[#ff3333] py-8 mt-10'>
                <div className='w-[90%] mx-auto'>
                    <div className='w-full  grid  lg:grid-cols-2 items-center  justify-between'>
                        <div>
                            <h2 className='text-3xl font-semibold text-white mb-3'>Sign Up For Newsletter</h2>
                            <p className='text-white mb-3'>Get E-mail updates about our latest shop and special offers.</p>
                        </div>
                        <div className='flex mt-2 md:mt-0'>
                            <input type="text" className='w-full md:h-15 h-12 bg-white p-3 rounded-l-md outline-none' placeholder='Your email address' />
                            <button className='bg-[#000000] md:h-15 h-12 text-white md:px-10 px-5 rounded-r-md'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog


const blogList = [
    { image: 'https://dostguru.com/HTML/hitech/assets/img/blog/blog_3.jpg', title: 'New Hp Laptop best', para: 'paragraph add here ...', admin: '', date: '21st June, 2023' },
    { image: 'https://dostguru.com/HTML/hitech/assets/img/blog/blog_1.jpg', title: 'New Hp Laptop best', para: 'paragraph add here ...', admin: '', date: '21st June, 2023' },
    { image: 'https://dostguru.com/HTML/hitech/assets/img/blog/blog_2.jpg', title: 'New Hp Laptop best', para: 'paragraph add here ...', admin: '', date: '21st June, 2023' },
    { image: 'https://dostguru.com/HTML/hitech/assets/img/blog/blog_3.jpg', title: 'New Hp Laptop best', para: 'paragraph add here ...', admin: '', date: '21st June, 2023' },
    { image: 'https://dostguru.com/HTML/hitech/assets/img/blog/blog_1.jpg', title: 'New Hp Laptop best', para: 'paragraph add here ...', admin: '', date: '21st June, 2023' },
]
