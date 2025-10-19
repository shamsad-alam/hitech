import React, { useState } from "react";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";

export default function Cart() {
    const products = [
        {
            id: 1,
            name: "Men’s Sneakers",
            brand: "Nike",
            price: 4599,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25986286/2023/11/23/98add0b4-a1d3-433a-b483-c67da45c06561700723243382JQRMenGreyFashion1.jpg",
        },
        {
            id: 2,
            name: "Classic T-Shirt",
            brand: "Levi’s",
            price: 1299,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/4/E7V99rWM_54a12ee7e1c44a399a177e393c32c3cb.jpg",
        },
        {
            id: 3,
            name: "Casual Shirt",
            brand: "H&M",
            price: 1899,
            image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29265888/2024/4/30/fe4c28bd-d5fb-467d-9d5e-26e3be3f7b671714470947075Shirts1.jpg",
        },
    ];

    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.id === product.id);
            if (itemExists) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    // Remove product
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Update quantity
    const changeQty = (id, num) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + num) } : item
        ));
    };

    // Total price
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="w-[90%] mx-auto bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-10 text-pink-600">
                Myntra Style Cart
            </h1>

            {/* Product Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-md w-full h-100 object-cover mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-600 mb-1">{product.brand}</p>
                        <p className="font-bold text-pink-600 mb-4">
                            ₹{product.price.toLocaleString()}
                        </p>
                        <button
                            onClick={() => addToCart(product)}
                            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 w-full rounded flex justify-center items-center gap-2"
                        >
                            <FaCartPlus /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-2/3 mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-pink-600">Cart Details</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500">{item.brand}</p>
                                        <p className="font-bold text-pink-600">
                                            ₹{item.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => changeQty(item.id, -1)}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        −
                                    </button>
                                    <span>{item.qty}</span>
                                    <button
                                        onClick={() => changeQty(item.id, 1)}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}

                        <div className="flex justify-between items-center mt-6">
                            <h3 className="text-xl font-bold text-gray-800">Total:</h3>
                            <p className="text-2xl font-bold text-pink-600">
                                ₹{total.toLocaleString()}
                            </p>
                        </div>
                        <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded font-semibold text-lg transition">
                            Proceed to Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
