import React from 'react'
import './People.css'
import Slider from 'react-slick';
import hamza from '../../assets/img/carousel/hamza.png'

const People = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <div className='kontainer'>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
            <Slider  {...settings}>
                <div className='crausel'>
                    <div className="item">
                        <div className="carousel-img">
                            <img src={hamza} alt="" />
                        </div>
                        <div className="carousel-about">
                            <h5>Hamza Faizi</h5>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src="./images/products/yulduzchalar.svg" alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="carousel-img">
                            <img src={hamza} alt="" />
                        </div>
                        <div className="carousel-about">
                            <h5>Hamza Faizi</h5>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src="./images/products/yulduzchalar.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
            <center className="title">
                <a href="#">Here are our some of the best clients.</a>
                <h2>What People Say About Us</h2>
            </center>

            {/* <div id="team-carousel" className="owl-carousel owl-theme">

                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item"><div className="carousel-img">
                    <img src="./images/carousel/hamza.png" alt="" />
                </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div></div>
                <div className="item"><div className="carousel-img">
                    <img src="./images/carousel/hamza.png" alt="" />
                </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div></div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="carousel-img">
                        <img src="./images/carousel/hamza.png" alt="" />
                    </div>
                    <div className="carousel-about">
                        <h5>Hamza Faizi</h5>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src="./images/products/yulduzchalar.svg" alt="" />
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default People