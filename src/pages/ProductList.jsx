import React from 'react'
import Card from '../component/Card'

function ProductList() {
    return (
        <>
            <section className='bg-gray-50'>
                <div className='w-[90%] mx-auto py-10'>
                    <div className='flex gap-4'>
                        <aside className='w-[23%] bg-white rounded-md p-5  uppercase shadow-md'>
                            <h2 className='text-2xl font-semibold'>Filter by</h2>

                            {/* range section */}
                            <div className='mt-3 mb-6'>
                                <h3 className='text-md font-semibold pb-1 text-yellow-400 border-b-1 border-zinc-200'>Range section</h3>
                                <div className='w-[100%] flex justify-between md:w-1/2 gap-4 capitalize'>
                                    <div className=''>
                                        <h4 className='my-2'>Min</h4>
                                        <input type="number" placeholder='1' className='w-[100px] text-md border-1 border-zinc-100 rounded-sm px-3 py-2' />
                                    </div>
                                    <div className=''>
                                        <h4 className='my-2'>max</h4>
                                        <input type="number" placeholder='1' className='w-[100px] text-md border-1 border-zinc-100 rounded-sm px-3 py-2' />
                                    </div>
                                </div>

                            </div>
                        </aside>
                        <Card />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductList
