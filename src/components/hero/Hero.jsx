import React from 'react'
import watch from "../../assets/img/hero/watch.png"
import './Hero.css'

const Hero = () => {
    return (
        <div className='main-bg'>
            <div className="kontainer main">
                <div className="discover">
                    <h1>Discover Most Suitable Watches</h1>
                    <p>
                        Find the best, reliable, and cheap smart watches here. We focus on
                        product quality. Here you can find smart watches of almost all
                        brands. So why you are waiting? Just order now!
                    </p>
                    <div className="input input-1">
                        <input

                            placeholder="Find the best brands"
                            type="text"
                            name=""
                            id=""
                        />
                        <button>Search</button>
                    </div>
                </div>
                <div className="watch-img">
                    <img src={watch} alt="Iwatch" />
                </div>
            </div>
        </div>

    )
}

export default Hero