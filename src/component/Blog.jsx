import React from 'react'

function NewsLetter() {
    return (
        <>
            <div className='w-full bg-[#ff3333] py-8 mt-10'>
                <div className='w-[90%] mx-auto'>
                    <div className='w-full  grid  lg:grid-cols-2 items-center  justify-between'>
                        <div>
                            <h2 className='text-3xl font-semibold text-white mb-3'>Sign Up For Newsletter</h2>
                            <p className='text-white'>Get E-mail updates about our latest shop and special offers.</p>
                        </div>
                        <div className='flex'>
                            <input type="text" className='w-full h-15 bg-white p-3 rounded-l-md outline-none' placeholder='Your email address' />
                            <button className='bg-[#000000] h-15 text-white px-10 rounded-r-md'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Blog() {
    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div>
                    <div className='grid  lg:grid-cols-7 items-center gap-4 mb-5'>
                        <h2 className='text-2xl font-semibold' ><span className='text-[#ff3333]'>Our</span> Blog</h2>
                        <div className='col-span-6 border-b-1 border-zinc-400'></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/blog/blog_1.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                            <p className='text-gray-500 text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <div className='w-full border-t-1 border-gray-200 pt-3'>
                                <span className='text-sm text-gray-500'>By Admin</span> <span className='mx-2'>|</span> <span className='text-sm text-gray-500'>21st June, 2023</span>
                            </div>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/blog/blog_2.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                            <p className='text-gray-500 text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <div className='w-full border-t-1 border-gray-200 pt-3'>
                                <span className='text-sm text-gray-500'>By Admin</span> <span className='mx-2'>|</span> <span className='text-sm text-gray-500'>21st June, 2023</span>
                            </div>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/blog/blog_3.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                            <p className='text-gray-500 text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <div className='w-full border-t-1 border-gray-200 pt-3'>
                                <span className='text-sm text-gray-500'>By Admin</span> <span className='mx-2'>|</span> <span className='text-sm text-gray-500'>21st June, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <NewsLetter />
        </>
    )
}

export default Blog
