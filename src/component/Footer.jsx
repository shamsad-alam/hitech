import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-full py-12  bg-black text-white'>
                <div className='w-[90%] mx-auto'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                        <div>
                            <h3 className='text-2xl font-semibold mb-5'>Contact Us</h3>
                            <p className='mb-3'>123 Street, New York, USA</p>
                            <p className='mb-3'>Email: mycompany@gmail.com</p>
                            <p className='mb-3'>Phone: +012 345 67890</p>

                            {/* Card accepted icons */}
                            <div className='flex gap-3 mt-5'>
                                <img className='w-10' src="" alt="" />
                                <img className='w-10' src="https://dostguru.com/HTML/hitech/assets/img/payment/payment_2.png" alt="" />
                                <img className='w-10' src="https://dostguru.com/HTML/hitech/assets/img/payment/payment_3.png" alt="" />
                                <img className='w-10' src="https://dostguru.com/HTML/hitech/assets/img/payment/payment_4.png" alt="" />
                                <img className='w-10' src="https://dostguru.com/HTML/hitech/assets/img/payment/payment_5.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold mb-5'>My Account</h3>
                            <ul className='space-y-3 text-gray-400'>
                                <li className='hover:text-red-500 cursor-pointer'>About Us</li>
                                <li className='hover:text-red-500 cursor-pointer'>Contact Us</li>
                                <li className='hover:text-red-500 cursor-pointer'>My Account</li>
                                <li className='hover:text-red-500 cursor-pointer'>Orders Tracking</li>
                                <li className='hover:text-red-500 cursor-pointer'>Checkout</li>
                                <li className='hover:text-red-500 cursor-pointer'>Wishlist</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold mb-5'>Categories</h3>
                            <ul className='space-y-3 text-gray-400'>
                                <li className='hover:text-red-500 cursor-pointer'>Smart Phone</li>
                                <li className='hover:text-red-500 cursor-pointer'>Smart Watch</li>
                                <li className='hover:text-red-500 cursor-pointer'>Smart TV</li>
                                <li className='hover:text-red-500 cursor-pointer'>Laptop & Computer</li>
                                <li className='hover:text-red-500 cursor-pointer'>Head Phone</li>
                                <li className='hover:text-red-500 cursor-pointer'>Accessories</li>
                                <li className='hover:text-red-500 cursor-pointer'>Camera</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold mb-5'>Information</h3>
                            <ul className='space-y-3 text-gray-400'>
                                <li className='hover:text-red-500 cursor-pointer'>Privacy Policy</li>
                                <li className='hover:text-red-500 cursor-pointer'>Terms & Condition</li>
                                <li className='hover:text-red-500 cursor-pointer'>Shipping Policy</li>
                                <li className='hover:text-red-500 cursor-pointer'>Return Policy</li>
                                <li className='hover:text-red-500 cursor-pointer'>FAQs</li>
                                <li className='hover:text-red-500 cursor-pointer'>Support</li>
                                <li className='hover:text-red-500 cursor-pointer'>Contact Us</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
