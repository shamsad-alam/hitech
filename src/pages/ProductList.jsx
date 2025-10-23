import React from 'react'
import Card from '../component/Card'
import { Link } from 'react-router-dom'

function ProductList() {
    return (
        <>
            <section className='bg-gray-50'>
                <div className='md:py-5 py-3 md:mt-10 mt-7 bg-white shadow-sm'>
                    <h3 className='w-[90%] mx-auto text-md text-zinc-800 flex gap-9 font-semibold'>
                        <Link to='/'>Home</Link>
                        <span> Product</span>
                    </h3>
                </div>
                <div className='w-[90%] mx-auto md:py-10 my-7'>
                    <div className='md:flex gap-4'>
                        <aside className='md:w-[23%] md:inline-block hidden bg-white rounded-md p-5 text-zinc-600 uppercase shadow-md'>
                            <h2 className='text-2xl font-semibold text-zinc-900'>Filter by</h2>

                            {/* range section */}
                            <div className='mt-3 mb-8'>
                                <h3 className='text-md font-semibold pb-1 text-yellow-400 border-b-1 border-zinc-200'>Range</h3>
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

                            {/* color section */}
                            <div className='mt-3 mb-8'>
                                <h3 className='text-md font-semibold pb-1 text-yellow-400 border-b-1 border-zinc-200'>Color</h3>
                                <div className='w-[100%] capitalize'>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="white">
                                            <input type="checkbox" name="white" id="white" /> white
                                        </label>
                                        <h4 className='my-1'>(234)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="yellow">
                                            <input type="checkbox" name="yellow" id="yellow" /> yellow
                                        </label>
                                        <h4 className='mb-1'>(539)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="red">
                                            <input type="checkbox" name="red" id="red" /> red
                                        </label>
                                        <h4 className='mb-1'>(139)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="green">
                                            <input type="checkbox" name="green" id="green" /> green
                                        </label>
                                        <h4 className='mb-1'>(90)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="black">
                                            <input type="checkbox" name="black" id="black" /> black
                                        </label>
                                        <h4 className='mb-1'>(234)</h4>
                                    </div>
                                </div>
                            </div>

                            {/* brand section */}
                            <div className='mt-3 mb-8'>
                                <h3 className='text-md font-semibold pb-1 text-yellow-400 border-b-1 border-zinc-200'>Brand</h3>
                                <div className='w-[100%] capitalize'>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="apple">
                                            <input type="checkbox" name="apple" id="apple" /> apple
                                        </label>
                                        <h4 className='my-1'>(139)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="vivo">
                                            <input type="checkbox" name="vivo" id="vivo" /> vivo
                                        </label>
                                        <h4 className='mb-1'>(24)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="readmi">
                                            <input type="checkbox" name="readmi" id="readmi" /> readmi
                                        </label>
                                        <h4 className='mb-1'>(339)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="infinex">
                                            <input type="checkbox" name="infinex" id="infinex" /> infinex
                                        </label>
                                        <h4 className='mb-1'>(24)</h4>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="motorola">
                                            <input type="checkbox" name="motorola" id="motorola" /> motorola
                                        </label>
                                        <h4 className='mb-1'>(339)</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Discout section */}
                            <div className='mt-3 mb-8'>
                                <h3 className='text-md font-semibold pb-1 text-yellow-400 border-b-1 border-zinc-200'>discount range</h3>
                                <div className='w-[100%] lowercase'>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="10" className='my-2 text-sm'>
                                            <input type="checkbox" name="10" id="10" /> 10% and above
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="20" className='mb-2 text-sm'>
                                            <input type="checkbox" name="20" id="20" /> 20% and above
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="30" className='mb-2 text-sm'>
                                            <input type="checkbox" name="30" id="30" /> 30% and above
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="40" className='mb-2 text-sm'>
                                            <input type="checkbox" name="40" id="40" /> 40% and above
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="50" className='mb-2 text-sm'>
                                            <input type="checkbox" name="50" id="50" /> 50% and above
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="60" className='mb-2 text-sm'>
                                            <input type="checkbox" name="60" id="60" /> 60% and above
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Feature section */}
                            <div className='mt-3 mb-8'>
                                <h3 className='text-md font-semibold pb-1 text-yellow-400 border-b-1 border-zinc-200'>Features</h3>
                                <div className='w-[100%]'>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="wifi" className='my-2 text-sm'>
                                            <input type="checkbox" name="wifi" id="wifi" /> wifi
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="blutooth" className='mb-2 text-sm'>
                                            <input type="checkbox" name="blutooth" id="blutooth" /> blutooth
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="usb" className='mb-2 text-sm'>
                                            <input type="checkbox" name="usb" id="usb" /> usb
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="nfc" className='mb-2 text-sm'>
                                            <input type="checkbox" name="nfc" id="nfc" /> nfc
                                        </label>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <label htmlFor="gprs" className='mb-2 text-sm'>
                                            <input type="checkbox" name="gprs" id="gprs" /> gprs
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button className='bg-amber-500 px-4 py-1 text-white rounded-sm'>Clear All</button>
                        </aside>
                        <Card />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductList
