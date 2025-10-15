import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { BsGiftFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";




const serviceData = [
    {
        id: 1,
        icon: <MdSupportAgent />,
        title: "Free Shipping",
        description: "On all order over $99"
    },
    {
        id: 2,
        icon: <MdOutlineSecurity />,
        title: "Free Return",
        description: "Return within 30 days"
    },
    {
        id: 3,
        icon: <BsGiftFill />,
        title: "Secure Payment",
        description: "100% secure payment"
    },
    {
        id: 4,
        icon: <FaShippingFast />,
        title: "24/7 Support",
        description: "Dedicated support"
    },
]

function ServiceCard() {
    return (
        <>
            <div>
                <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto py-10'>
                    {
                        serviceData.map((data) => (
                            <div key={data.id} className='bg-white flex justify-center items-center  gap-5 py-10 text-center shadow-lg rounded-lg'>
                                <div className='w-15 h-15 flex justify-center items-center rounded-full bg-zinc-100 text-[#ff3333]'>
                                    <i className='text-4xl'>{data.icon}</i>
                                </div>
                                <div className='text-left'>
                                    <h3 className='text-2xl font-semibold mb-2'>{data.title}</h3>
                                    <p className='text-gray-600'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ServiceCard
