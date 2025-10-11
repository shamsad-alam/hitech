import React from 'react'
// import OfferTimer from './OfferTimmer'

function SpecialProduct() {
    return (
        <>
            <div className='w-[90%] mx-auto py-10'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div>
                        <div className='grid lg:grid-cols-3 items-center gap-4 mb-5'>
                            <h2 className='text-3xl font-semibold' ><span className='text-[#ff3333]'>Deal</span> Of The Day</h2>
                            <div className='col-span-2 border-b-1 border-zinc-400'></div>
                        </div>
                        <div className='grid lg:grid-cols-2 justify-center items-center bg-white min-h-110 shadow-lg rounded-lg p-8 '>
                            <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                            <div >
                                <div className='border-b-1 border-gray-300 pb-4'>
                                    <h2 className='text-2xl'>Monster Speaker 50DB Volume</h2>
                                    <h2 className='text-2xl py-2'>$20.00 <span className='text-[16px] text-gray-500 line-through '>30.00</span></h2>
                                </div>
                                <p className='text-[18px] text-gray-500 my-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, fugiat.</p>
                                <div className='flex flex-col gap-2 my-4'>
                                    <p className='text-xl '>Available : 200</p>
                                    <div className='w-full bg-gray-200 h-2.5 rounded-full'>
                                        <div className='bg-[#ff3333] h-2.5 rounded-full w-[70%]'></div>
                                    </div>
                                </div>
                                <div className='w-[70%] grid grid-cols-3 gap-3 my-6'>
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
                        <div className='grid  lg:grid-cols-3 items-center gap-4 mb-5'>
                            <h2 className='text-3xl font-semibold' ><span className='text-[#ff3333]'>Special</span> Product</h2>
                            <div className='col-span-2 border-b-1 border-zinc-400'></div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-110 gap-6'>
                            <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <h3 className='text-xl mt-5 font-semibold my-2'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                             <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <h3 className='text-xl mt-5 font-semibold my-2'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                             <div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-4'>
                                <div className='border-b-1 border-gray-200'>
                                    <img src="https://dostguru.com/HTML/hitech/assets/img/product/deal_1.jpg" alt="" />
                                </div>
                                <h3 className='text-xl mt-5 font-semibold my-2'>Smart Watch Black</h3>
                                <div className='flex gap-2'>
                                    <span className='text-[#ff3333] font-semibold'>$30.00</span>
                                    <span className='text-gray-500 line-through'>$40.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SpecialProduct
