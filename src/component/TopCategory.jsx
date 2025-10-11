import React from 'react'

function TopCategory() {
    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div>
                    <div className='grid  lg:grid-cols-7 items-center gap-4 mb-5'>
                        <h2 className='text-2xl font-semibold' ><span className='text-[#ff3333]'>Top</span> Categories</h2>
                        <div className='col-span-6 border-b-1 border-zinc-400'></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6'>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_5.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_2.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_1.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_2.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                        </div>

                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_4.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_2.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'>Smart Watch</h3>
                        </div>
                        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-lg p-3'>
                            <div className='mb-3'>
                                <img src="https://dostguru.com/HTML/hitech/assets/img/category/category_7.jpg" alt="" />
                            </div>
                            <h3 className='text-xl pt-3 my-2 border-t-1 pb-3 border-gray-200'> Head pone</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCategory
