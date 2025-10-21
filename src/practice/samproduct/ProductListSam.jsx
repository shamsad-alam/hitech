import React from 'react'
import { Link } from 'react-router-dom';

function ProductListSam() {
    return (
        <>
            <section className='w-7xl mx-auto mt-10'>
                <div className='flex gap-5 '>

                    {products.map((items) => (
                        <Link to={`/products/${items.id}`} key={items.id} className='shadow-2xl p-5 rounded-xl'>
                            <h3>{items.name} </h3>
                            <h4>{items.price} </h4>
                            <p>{items.description} </p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductListSam

const products = [
    { id: 1, name: "Smart Watch", price: 2999, description: "High quality smart watch with health tracker" },
    { id: 2, name: "Wireless Headphones", price: 1999, description: "Noise-cancelling over-ear headphones" },
    { id: 3, name: "Bluetooth Speaker", price: 1499, description: "Portable speaker with deep bass" },
];
