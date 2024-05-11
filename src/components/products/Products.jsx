import React, { useEffect, useState } from 'react'
import product from "../../assets/img/products/1.png"
import yulduzchalar from "../../assets/img/products/yulduzchalar.svg"
import "./Products.css"
import axios from 'axios'

const Products = () => {

    const [data, setData] = useState([])
    const [count, setCount] = useState(3)


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=${count}`)
            .then(res => setData(res.data))
    }, [count])


    let products = data?.map((el) => (
        <div key={el.id} title={el.title} className="product-box-list">
            <div className="watch-bgc">
                <img src={el.image} alt="Watch" />
            </div>
            <h5>{el.title}</h5>
            <img src={yulduzchalar} alt="yulduzchalar" />
            <div className="watch-sum">
                <p><del>${el.price + 1}</del></p>
                <h5>${el.price}</h5>
            </div>
        </div>
    ))


    return (
        <div>
            <center className="kontainer title">
                <a href="#">Find your favourite smart watch.</a>
                <h2>Our Latest Products</h2>
            </center>
            <section className="kontainer product">
                {products}
            </section>
            <div className={`view-more`}>
                <button disabled={count == 3 ? false : true} onClick={() => setCount(p => p = 0)}>View More</button>
            </div>
        </div>
    )
}

export default Products