import React from 'react'

function ProductDetails() {
    return (
        <>
            <div className='w-[90%] mx-auto py-10 bg-white'>
                <div className='grid lg:grid-cols-2 gap-4 px-5'>
                    <div className=' '>
                        <img src="https://dostguru.com/HTML/hitech/assets/img/product/product_5.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold mb-3'>Smart Watch Black</h2>
                        <div className='flex gap-4 mb-3'>
                            <span className='text-[#ff3333] font-semibold text-2xl'>$30.00</span>
                            <span className='text-gray-500 line-through'>$40.00</span>
                        </div>
                        <p className='mb-2'>Fashion has been creating well-designed collections since 2010.</p>
                        <p className='mb-5'>The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-tcollection in which every item is a vital part of a woman's wardrobe.</p>
                        <div className='mb-5'>
                            <h3 className='text-lg font-semibold mb-2'>Available Options</h3>
                            <div className='mb-3'>
                                <h3 className='font-medium mb-2'>Color : </h3>
                                <div>
                                    <span className='inline-block w-6 h-6 bg-red-500 rounded-full mr-2 cursor-pointer border-2 border-gray-300'></span>
                                    <span className='inline-block w-6 h-6 bg-blue-500 rounded-full mr-2 cursor-pointer border-2 border-gray-300'></span>
                                    <span className='inline-block w-6 h-6 bg-green-500 rounded-full mr-2 cursor-pointer border-2 border-gray-300'></span>
                                    <span className='inline-block w-6 h-6 bg-yellow-500 rounded-full mr-2 cursor-pointer border-2 border-gray-300'></span>
                                </div>
                            </div>
                            <div>
                                <h3 className='font-medium mb-4'>Size : </h3>
                                <div className='mb-9'>
                                    <span className=' w-10 h-10 px-4 py-2 bg-gray-100 rounded-sm mr-2 cursor-pointer'>S</span>
                                    <span className=' w-10 h-10 px-4 py-2 bg-gray-100 rounded-sm mr-2 cursor-pointer'>M</span>
                                    <span className=' w-10 h-10 px-4 py-2 bg-gray-100 rounded-sm mr-2 cursor-pointer'>L</span>
                                    <span className=' w-10 h-10 px-4 py-2 bg-gray-100 rounded-sm mr-2 cursor-pointer'>XL</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 mb-5'>
                            <input type="number" defaultValue={1} className='w-20 border-1 border-gray-300 p-2 rounded-md' />
                            <button className='bg-[#ff3333] text-white px-6 py-2 rounded-md'>Add to Cart</button>
                        </div>
                        <div className='mb-5'>
                            <h3 className='text-lg font-semibold mb-2'>Category: <span className='text-gray-500 font-normal'>Smart Watch</span></h3>
                            <h3 className='text-lg font-semibold mb-2'>Tags: <span className='text-gray-500 font-normal'>Watch, Smart Watch, Black</span></h3>
                        </div>
                        <div className='mb-5'>
                            <h3 className='text-lg font-semibold mb-2'>Description</h3>
                            <p className='text-gray-500 mb-2 '>Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>

                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Additional Information</h3>
                            <div>
                                <table className='w-full text-left'>
                                    <tbody>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='py-2 font-medium'>Weight</td>
                                            <td className='py-2 text-gray-500'>1 kg</td>
                                        </tr>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='py-2 font-medium'>Dimensions</td>
                                            <td className='py-2 text-gray-500'>10 x 10 x 15 cm</td>
                                        </tr>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='py-2 font-medium'>Materials</td>
                                            <td className='py-2 text-gray-500'>Metal, Plastic</td>
                                        </tr>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='py-2 font-medium'>Color</td>
                                            <td className='py-2 text-gray-500'>Black, Blue, Red</td>
                                        </tr>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='py-2 font-medium'>Size</td>
                                            <td className='py-2 text-gray-500'>S, M, L, XL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductDetails
