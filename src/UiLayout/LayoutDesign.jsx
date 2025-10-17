import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

function LayoutDesign() {
    return (
        <>
            <main>
                <Navbar />
                <Outlet />
                <Footer />
            </main>
        </>
    )
}

export default LayoutDesign
