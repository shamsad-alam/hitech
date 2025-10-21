import React from 'react'
import { Link, useParams } from 'react-router-dom';

function ProductDetailsSam() {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))

    if (!product) {
        return <h2 className="text-center mt-10 text-2xl">Product not found 😢</h2>;
    }
    return (
        <div>
            <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>{product.price} </h3>
                <p>{product.description} </p>
                <Link to={`/`} >Go to Back</Link>
            </div>
        </div>
    )
}

export default ProductDetailsSam

const products = [
    { id: 1, name: "Smart Watch", price: 2999, description: "High quality smart watch with health tracker High quality smart watch with health tracker High quality smart watch with health tracker" },
    { id: 2, name: "Wireless Headphones", price: 1999, description: "Noise-cancelling over-ear headphones. Noise-cancelling over-ear headphones. Noise-cancelling over-ear headphones" },
    { id: 3, name: "Bluetooth Speaker", price: 1499, description: "Portable speaker with deep bass. Portable speaker with deep bass Portable speaker with deep bass" },
];
