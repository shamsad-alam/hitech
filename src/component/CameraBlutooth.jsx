import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CameraBlutooth() {
    const [cardIndex, setcardIndex] = useState(0)
    const cardResponsive = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3

    const handleNext = () => {
        if (cardIndex + cardResponsive < dataList.length) {
            setcardIndex(cardIndex + 1)
        }
    }
    const handlePrev = () => {
        if (cardIndex > 0) {
            setcardIndex(cardIndex - 1)
        }

    }
    return (
        <section>
            <div className='w-[90%] mx-auto md:py-10 py-6'>
                <div>
                    {/* header (title) section */}
                    <div className='grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4 mb-5'>
                        <h2 className='text-2xl col-span-7 lg:col-span-3 -order-2 font-semibold' ><span className='text-[#ff3333]'>Camera </span> & Bluetooth</h2>
                        <div className='col-span-8 border-b-1 border-zinc-400'></div>
                        <div className='relative flex gap-4 justify-end -order-1 md:order-1'>
                            <button onClick={handlePrev} className='cursor-pointer'><FaChevronLeft /></button>
                            <button onClick={handleNext} className='cursor-pointer'><FaChevronRight /></button>
                        </div>
                    </div>

                    {/* All cards section  */}
                    <div className='flex flex-col lg:flex-row-reverse gap-6'>
                        <img src="https://dostguru.com/HTML/hitech/assets/img/h&b.jpg" className='order-3' alt="" />

                        <div className='overflow-hidden order-1'>
                            <div className='flex transition-all duration-500' style={{ transform: `translateX(-${(cardIndex * 100) / cardResponsive}%)` }}>
                                {dataList.map((list, index) => (
                                    <Link to={`products/${list.id}`} key={index} className='flex-none w-full md:w-1/2 lg:w-1/3 p-3'>
                                        <div className='bg-white flex flex-row justify-center gap-4 items-center shadow-md rounded-lg p-5'>
                                            <div className='w-25'>
                                                <img src={list.image} alt="" />
                                            </div>
                                            <div>
                                                <h3 className='text-lg font-semibold '>{list.title} </h3>
                                                <span className='mt-4 flex text-sm text-red-600 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                <div className='flex gap-2'>
                                                    <span className='text-[#ff3333] font-semibold'>${list.mainPrice}</span>
                                                    <span className='text-gray-500 line-through'>${list.subPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className='flex transition-all duration-500' style={{ transform: `translateX(-${(cardIndex * 100) / cardResponsive}%)` }}>
                                {dataList.map((list, index) => (
                                    <Link to={`products/${list.id}`} key={index} className='flex-none w-full md:w-1/2 lg:w-1/3 p-3'>
                                        <div className='bg-white flex flex-row justify-center gap-4 items-center shadow-md rounded-lg p-5'>
                                            <div className='w-25'>
                                                <img src={list.image} alt="" />
                                            </div>
                                            <div>
                                                <h3 className='text-lg font-semibold '>{list.title} </h3>
                                                <span className='mt-4 flex text-sm text-red-600 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                <div className='flex gap-2'>
                                                    <span className='text-[#ff3333] font-semibold'>${list.mainPrice}</span>
                                                    <span className='text-gray-500 line-through'>${list.subPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CameraBlutooth


const dataList = [
    { id: 1, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_24.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },
    { id: 2, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_26.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },
    { id: 3, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_10.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },
    { id: 4, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_10.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },
    { id: 5, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_26.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },
    { id: 6, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_24.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },
    { id: 7, image: 'https://dostguru.com/HTML/hitech/assets/img/product/product_10.jpg', title: 'New Hp Laptop best', mainPrice: '30.00', subPrice: '40.00' },

]
