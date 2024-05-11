import React from 'react'
import photo from "../../assets/img/products/1.png"
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="kontainer subscribe">
            <div className="grid-row">
                <h2>Subscribe To Newsletter</h2>
                <p>Get free guide about smart watches daily. </p>
                <div className="input">
                    <input placeholder="Enter Email Address" type="email" name="email" id="email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div >
                <img src={photo} alt="" />
            </div>
        </div>
    )
}

export default Subscribe