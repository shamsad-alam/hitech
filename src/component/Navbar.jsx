import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";





function Navbar() {
    return (
        <>
            <div className='w-full bg-white shadow-md sticky top-0 z-50'>
                {/* ==================== Top Navbar ================= */}
                <div className='bg-gray-800 text-white p-2 md:block hidden '>
                    <div className='md:flex max-w-[90%] flex-wrap mx-auto justify-between items-center'>
                        <h3>Get 30% Off On Selected Items</h3>
                        <div className='flex gap-6'>
                            <div><h3>My Account</h3></div> |
                            <div><h3>USD</h3></div> |
                            <div><h3>ENG</h3></div>
                        </div>
                    </div>
                </div>

                {/* ==================== Main Navbar ================= */}
                <div className='border-b-1 border-gray-300'>
                    <div className='max-w-[90%] mx-auto flex justify-between items-center md:py-6 py-4'>
                        <div className='flex gap-2 items-center '>
                            <span className='text-[25px] text-red-600 cursor-pointer md:hidden'><HiMenuAlt2 /></span>
                            <h1 className='text-3xl font-bold'>Hi<span className='text-red-600'>T</span>ech</h1>
                        </div>

                        {/* nav link */}
                        <div className='md:flex items-center gap-5 border-1 text-md border-gray-300 rounded-md hidden'>
                            <select name="" id="" className='pl-4 focus:outline-none'>
                                <option value="">All Categories</option>
                                <option value="">Laptop</option>
                                <option value="">Mobile</option>
                                <option value="">TV</option>
                                <option value="">Camera</option>
                            </select> |
                            <input type="text" placeholder='Search' className='w-md p-2 rounded-l-md focus:outline-none' />
                            <button className='bg-[#ff3333]  text-white text-[20px] px-10 py-2 rounded-r-md'>Search</button>
                        </div>

                        <div className='flex gap-6'>
                            <div className='md:flex hidden'><h3>Compare</h3></div>
                            <div className='md:flex hidden'><h3>Favourate</h3></div>
                            <div className='flex gap-2 items-center'>
                                <span className=' text-[25px] cursor-pointer md:hidden'><IoPersonCircle /></span>
                                <span className='flex text-2xl cursor-pointer'><FaCartArrowDown /></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================== Bottom Navbar ================= */}
                <div className='py-4 shadow-none md:shadow-lg md:block hidden'>
                    <div className='md:flex max-w-[90%] mx-auto justify-between items-center'>
                        <div className='flex gap-10 font-semibold cursor-pointer'>
                            <div><h3>Home</h3></div>
                            <div><h3>Shop</h3></div>
                            <div><h3>Blog</h3></div>
                            <div><h3>Gallary</h3></div>
                            <div><h3>Products</h3></div>
                            <div><h3>About Us</h3></div>
                            <div><h3>Contact Us</h3></div>
                            <div className='relative group'>
                                <div>
                                    <div className='flex gap-1 items-center'>
                                        <h3>Pages </h3>
                                        <span className='text-2xl'><RiArrowDropDownLine /></span>
                                    </div>
                                    <div className='absolute w-[200px] left-0 top-full bg-white text-black p-4 hidden group-hover:flex flex-col gap-2 shadow-lg'>
                                        <div className='py-1'>Action</div>
                                        <div className='py-1'>Another Action</div>
                                        <div className='py-1'>Something Else</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Hotline: +880 123 456 789</h3>
                        </div>
                    </div>
                </div>

                {/* ==================== Mobile version nabvar ================= */}
                <div className='py-4 shadow-none md:shadow-lg flex md:hidden'>
                    <div className='md:flex max-w-[90%] mx-auto justify-between items-center hidden'>
                        <div className='w-full flex flex-col z-99 absolute top-[70px] left-0 px-6 py-4 bg-white shadow-md gap-4 font-semibold cursor-pointer'>
                            <div><h3>Home</h3></div>
                            <div><h3>Shop</h3></div>
                            <div><h3>Blog</h3></div>
                            <div><h3>Gallary</h3></div>
                            <div><h3>Products</h3></div>
                            <div><h3>About Us</h3></div>
                            <div><h3>Contact Us</h3></div>
                            <div className='relative group'>
                                <div>
                                    <div className='flex gap-1 items-center'>
                                        <h3>Pages </h3>
                                        <span className='text-2xl'><RiArrowDropDownLine /></span>
                                    </div>
                                    <div className='absolute w-[200px] left-0 top-full bg-white text-black p-4 hidden group-hover:flex flex-col gap-2 shadow-lg'>
                                        <div className='py-1'>Action</div>
                                        <div className='py-1'>Another Action</div>
                                        <div className='py-1'>Something Else</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Hotline: +880 123 456 789</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
