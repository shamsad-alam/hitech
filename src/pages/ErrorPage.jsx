import React from 'react'
import { Link } from 'react-router-dom'


function ErrorPage() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6">
                <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
                <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                    Oops! Page not found.
                </p>
                <p className="mb-8 text-center max-w-md text-gray-500">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link to='/' className="px-10 py-3 bg-red-500 hover:bg-yellow-500 text-white rounded-md hover:bg-red-700 transition">Go to Home</Link>

            </div>
        </>
    )
}

export default ErrorPage
