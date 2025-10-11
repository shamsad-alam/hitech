import React from 'react'

const serviceData = [
    {
        id: 1,
        icon: "fa-solid fa-truck-fast",
        title: "Free Shipping",
        description: "On all order over $99"
    },
    {
        id: 2,
        icon: "fa-solid fa-rotate",
        title: "Free Return",
        description: "Return within 30 days"
    },
    {
        id: 3,
        icon: "fa-solid fa-shield",
        title: "Secure Payment",
        description: "100% secure payment"
    },
    {
        id: 4,
        icon: "fa-solid fa-headset",
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
                            <div key={data.id} className='bg-white flex justify-center items-center  gap-10 px-4 py-12 text-center shadow-lg rounded-lg'>
                                <div className='text-5xl text-[#ff3333] mb-4'>
                                    <i >f</i>
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
