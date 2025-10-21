import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const product = productsDtl.find((item) => item.id === Number(id))

    if (!product) {
        return <h1>page not found</h1>
    }

    return (
        <>
            <div className='w-[90%] mx-auto py-10 bg-white'>
                {/* <div className='grid lg:grid-cols-2 gap-4 px-5'>
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
                </div> */}

                <div>
                    <div key={product.id} className='grid lg:grid-cols-2 gap-4 px-5'>
                        <div className=' '>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold mb-3'>{product.name} </h2>
                            <div className='flex gap-4 mb-3'>
                                <span className='text-[#ff3333] font-semibold text-2xl'>{product.price} </span>
                                <span className='text-gray-500 line-through'>{product.oldPrice}</span>
                            </div>
                            <p className='mb-2'>{product.shortDesc}</p>
                            <p className='mb-5'>{product.longDesc}</p>
                            <div className='mb-5'>
                                <h3 className='text-lg font-semibold mb-2'>Available Options</h3>
                                <div className='mb-3'>
                                    <h3 className='font-medium mb-2'>Color : </h3>
                                    {
                                        product.options.colors.map((color) => (
                                            <span key={color} className='inline-block w-6 h-6 rounded-full mr-2 cursor-pointer border-2 border-gray-300' style={{ backgroundColor: color }}></span>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h3 className='font-medium mb-4'>Size : </h3>
                                    <div>
                                        {product.options.sizes.map((size) => (
                                            <span key={size} className=' w-10 h-10 px-4 py-2 bg-gray-100 rounded-sm mr-2 cursor-pointer'>{size}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-5'>
                                <input type="number" defaultValue={1} className='w-20 border-1 border-gray-300 p-2 rounded-md' />
                                <button className='bg-[#ff3333] text-white px-6 py-2 rounded-md'>Add to Cart</button>
                            </div>
                            <div className='mb-5'>
                                <h3 className='text-lg font-semibold mb-2'>Category: <span className='text-gray-500 font-normal'>Smart Watch</span></h3>
                                <h3 className='text-lg font-semibold mb-2'>Tags:
                                    {
                                        product.tags.map((tag) => (
                                            <span key={tag} className='text-gray-500 font-normal'> {tag}, </span>
                                        ))
                                    }
                                </h3>
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
            </div>
        </>
    )
}

export default ProductDetails


export const productsDtl = [
    {
        id: 1,
        slug: "smart-watch-black",
        name: "Boat New Headphone",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_22.jpg",
        price: 30.0,
        oldPrice: 40.0,
        shortDesc: "Fashion has been creating well-designed collections since 2010.",
        longDesc:
            "The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-collection in which every item is a vital part of a woman's wardrobe.",
        options: {
            colors: ["red", "blue", "green", "yellow"],
            sizes: ["S", "M", "L", "XL"],
        },
        category: "Smart Watch",
        tags: ["Watch", "Smart Watch", "Black"],
        additionalInformation: {
            weight: "1 kg",
            dimensions: "10 x 10 x 15 cm",
            materials: "Metal, Plastic",
            color: "Black, Blue, Red",
            size: "S, M, L, XL",
        },
        stock: 25,
        rating: 4.5,
    },
    {
        id: 2,
        slug: "smart-watch-silver",
        name: "Oppo y91 New Series",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_14.jpg",
        price: 45.0,
        oldPrice: 59.0,
        shortDesc: "Premium smartwatch with health tracking and AMOLED display.",
        longDesc:
            "Track workouts, heart rate, sleep, and notifications with a bright AMOLED display and long battery life ideal for daily use.",
        options: {
            colors: ["silver", "black", "blue"],
            sizes: ["S", "M", "L"],
        },
        category: "Smart Watch",
        tags: ["Watch", "Wearables", "Silver"],
        additionalInformation: {
            weight: "0.9 kg",
            dimensions: "9 x 9 x 14 cm",
            materials: "Aluminum, Plastic",
            color: "Silver, Black, Blue",
            size: "S, M, L",
        },
        stock: 18,
        rating: 4.2,
    },
    {
        id: 3,
        slug: "wireless-earbuds-pro",
        name: "China New Technology Drone",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_18.jpg",
        price: 55.0,
        oldPrice: 79.0,
        shortDesc: "ANC earbuds with clear calls and deep bass.",
        longDesc:
            "Active noise cancellation with dual mics, low-latency mode, and all-day comfort — perfect for commute and workouts.",
        options: {
            colors: ["black", "white"],
            sizes: ["Standard"],
        },
        category: "Audio",
        tags: ["Earbuds", "Audio", "Wireless"],
        additionalInformation: {
            weight: "0.2 kg",
            dimensions: "6 x 4 x 3 cm",
            materials: "Plastic, Silicone",
            color: "Black, White",
            size: "Standard",
        },
        stock: 40,
        rating: 4.6,
    },
    {
        id: 4,
        slug: "gaming-headset",
        name: "Sony Ultra Max DB-88 Speaker",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_26.jpg",
        price: 39.0,
        oldPrice: 49.0,
        shortDesc: "Surround sound with RGB and noise-cancel mic.",
        longDesc:
            "Immersive surround sound, adjustable headband, and detachable mic — tuned for long gaming sessions and clear team comms.",
        options: {
            colors: ["black", "red"],
            sizes: ["Standard"],
        },
        category: "Audio",
        tags: ["Headset", "Gaming", "RGB"],
        additionalInformation: {
            weight: "0.6 kg",
            dimensions: "18 x 9 x 20 cm",
            materials: "Metal, Plastic, Foam",
            color: "Black, Red",
            size: "Standard",
        },
        stock: 32,
        rating: 4.1,
    },
    {
        id: 5,
        slug: "fitness-band",
        name: "Apple 15 New Series",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_20.jpg",
        price: 25.0,
        oldPrice: 35.0,
        shortDesc: "Lightweight band with SPO2 and sleep tracking.",
        longDesc:
            "Stay on top of health stats with continuous heart rate, SPO2, sleep stages, and step tracking in a slim design.",
        options: {
            colors: ["black", "blue", "green"],
            sizes: ["S", "M", "L"],
        },
        category: "Wearables",
        tags: ["Fitness", "Band", "Health"],
        additionalInformation: {
            weight: "0.15 kg",
            dimensions: "4 x 2 x 1 cm",
            materials: "TPU, Plastic",
            color: "Black, Blue, Green",
            size: "S, M, L",
        },
        stock: 50,
        rating: 4.0,
    },
    {
        id: 6,
        slug: "wireless-earbuds-pro",
        name: "Cannon Mini snap",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_24.jpg",
        price: 55.0,
        oldPrice: 79.0,
        shortDesc: "ANC earbuds with clear calls and deep bass.",
        longDesc:
            "Active noise cancellation with dual mics, low-latency mode, and all-day comfort — perfect for commute and workouts.",
        options: {
            colors: ["black", "white"],
            sizes: ["Standard"],
        },
        category: "Audio",
        tags: ["Earbuds", "Audio", "Wireless"],
        additionalInformation: {
            weight: "0.2 kg",
            dimensions: "6 x 4 x 3 cm",
            materials: "Plastic, Silicone",
            color: "Black, White",
            size: "Standard",
        },
        stock: 40,
        rating: 4.6,
    },
    {
        id: 7,
        slug: "gaming-headset",
        name: "Prestige 14L Water Filter",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_28.jpg",
        price: 39.0,
        oldPrice: 49.0,
        shortDesc: "Surround sound with RGB and noise-cancel mic.",
        longDesc:
            "Immersive surround sound, adjustable headband, and detachable mic — tuned for long gaming sessions and clear team comms.",
        options: {
            colors: ["black", "red"],
            sizes: ["Standard"],
        },
        category: "Audio",
        tags: ["Headset", "Gaming", "RGB"],
        additionalInformation: {
            weight: "0.6 kg",
            dimensions: "18 x 9 x 20 cm",
            materials: "Metal, Plastic, Foam",
            color: "Black, Red",
            size: "Standard",
        },
        stock: 32,
        rating: 4.1,
    },
    {
        id: 8,
        slug: "fitness-band",
        name: "Apple ipad 10x",
        image: "https://dostguru.com/HTML/hitech/assets/img/product/product_16.jpg",
        price: 25.0,
        oldPrice: 35.0,
        shortDesc: "Lightweight band with SPO2 and sleep tracking.",
        longDesc:
            "Stay on top of health stats with continuous heart rate, SPO2, sleep stages, and step tracking in a slim design.",
        options: {
            colors: ["black", "blue", "green"],
            sizes: ["S", "M", "L"],
        },
        category: "Wearables",
        tags: ["Fitness", "Band", "Health"],
        additionalInformation: {
            weight: "0.15 kg",
            dimensions: "4 x 2 x 1 cm",
            materials: "TPU, Plastic",
            color: "Black, Blue, Green",
            size: "S, M, L",
        },
        stock: 50,
        rating: 4.0,
    },
];

