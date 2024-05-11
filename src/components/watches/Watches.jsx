import React from 'react'
import watch_1 from "../../assets/img/watches/apple-watch.png"
import watch_2 from "../../assets/img/watches/fit bit.png"
import watch_3 from "../../assets/img/watches/xiaomi_redmi.png"
import "./Watches.css"

const Watches = () => {
    return (
        <div className="kontainer brend-list-1">
            <div className="brend-box-list-1">
                <div>
                    <img src={watch_1} alt="" />
                </div>
                <div>
                    <h3>Apple</h3>
                    <p>Apple is one of the most famous smart watches providing company.</p>
                </div>
            </div>
            <div className="brend-box-list-1">
                <div>
                    <img src={watch_3} alt="" />
                </div>
                <div>
                    <h3>Xiaomi</h3>
                    <p>Xiaomi smart watches are produced by MI company.</p>
                </div>
            </div>
            <div className="brend-box-list-1">
                <div>
                    <img src={watch_2} alt="" />
                </div>
                <div>
                    <h3>FitBit</h3>
                    <p>FitBit smart watches are best for there health and fitness features.</p>
                </div>
            </div>
        </div>

    )
}

export default Watches