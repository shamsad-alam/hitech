import React from 'react'

function TopProduct() {
    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div>
                    <div className='grid  lg:grid-cols-7 items-center gap-4 mb-5'>
                        <h2 className='text-2xl font-semibold' ><span className='text-[#ff3333]'>Top</span> Products</h2>
                        <div className='col-span-6 border-b-1 border-zinc-400'></div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 min-h-94 gap-6'>
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
                    </div>
                </div>
            </div>
            <SpecialTwoCard />
        </>
    )
}

function SpecialTwoCard() {
    return (
        <>
            <div className='w-[90%] grid lg:grid-cols-2 gap-10 mx-auto py-10'>
                <img src="https://dostguru.com/HTML/hitech/assets/img/ban1.jpg" alt="" />
                <img src="https://dostguru.com/HTML/hitech/assets/img/ban2.jpg" alt="" />
            </div>
        </>
    )
}

export default TopProduct
