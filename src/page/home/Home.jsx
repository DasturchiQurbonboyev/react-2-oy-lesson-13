import React from 'react'
import Hero from '../../components/hero/Hero'
import Watches from '../../components/watches/Watches'
import Products from '../../components/products/Products'
import People from '../../components/peoples/People'
import Subscribe from '../../components/subscribe/Subscribe'

const Home = () => {
    return (
        <>
            <Hero />
            <Watches />
            <Products />
            <People />
            <Subscribe />
        </>
    )
}

export default Home