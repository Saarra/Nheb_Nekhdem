import React from 'react'
import ContactUs from '../layouts/contactus/contactUs'
import Navbar from '../layouts/navbar/navbar'
import Product from '../layouts/products/product'

function Home() {
    return (
        <>
            <Navbar />
            <Product />
            <ContactUs />
        </>
    )
}

export default Home
