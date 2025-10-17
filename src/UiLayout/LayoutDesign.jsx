import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

function LayoutDesign() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default LayoutDesign
