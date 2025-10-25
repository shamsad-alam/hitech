import React from 'react'
import ProductData from './ProductData'

function TabProductCard() {
    return (
        <div className='flex justify-between mt-10'>
            {ProductData.map((data) => (
                <div className='w-[200px] text-center rounded-md shadow-xl bg-zinc-50 border-1 border-zinc-200'>
                    <div className='flex items-center justify-end mr-4 mt-3 '>
                        {
                            (data.onSale || data.newArrival) && (
                                <h3 className={`w-[50px] text-[12px] py-1 px-3 bg-amber-200 rounded-full ${data.onSale? 'bg-green-400':"bg-red-400"}`}>
                                    {data.onSale ? "Sale" : 'New'}
                                </h3>
                            )
                        }

                    </div>
                    <div className='w-full mb-2 h-[150px] bg-amber-100'>
                        <img src="" alt="" />
                    </div>
                    <div className='p-5'>
                        <h3 className='text-2xl mb-3 font-semibold'>{data.name} </h3>
                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold'>{data.price} </p>
                            <p className='line-through'>{data.oldPrice} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TabProductCard
