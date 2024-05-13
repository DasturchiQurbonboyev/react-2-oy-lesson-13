import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import close from "../../assets/img/close.svg"
import logo from "../../assets/img/logo.svg"
import cart from "../../assets/img/Shopping Cart.svg"
import account from "../../assets/img/Person.svg"
import NavbarSearchModle from './NavbarSearchModle'
import axios from '../../api'


const Navbar = () => {




    const [value, setValue] = useState("")
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`products/search?q=${value.trim()}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log("errrrrrrrrr>>>>", err))
    }, [value])




    return (
        <>
            <header>
                <nav id="navbar" className="kontainer nav-content">

                    <div className='nav_logo'>
                        <img src={logo} alt="Handbrake" />
                        <span className="mohid">Mohid</span>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link">Brends</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">Dropdown Link 1</a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">Dropdown Link 2</a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">Dropdown Link 3</a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">Dropdown Link 4</a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">Dropdown Link 5</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Recent Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                    </ul>
                    <button id="navbar-open" className="nav-btn">
                        <img src={close} alt="Menu" />
                    </button>
                    <div className="search">


                        <form className='navbar__search'>
                            {

                            }
                            <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="100" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                            </svg>
                            {
                                value ? <NavbarSearchModle data={data} /> : <></>
                            }

                        </form>



                        <img src={account} alt="" />
                        <img src={cart} alt="" />
                    </div>
                </nav>
            </header>
            {/* <ul id="navbar-responsive">
                <button id="navbar-close">
                    <img src="images/navigation/close.svg" alt="" />
                </button>
                <li className="navbar-item">
                    <a href="#home" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" className="navbar-link">Brends</a>
                </li>
                <li className="navbar-item">
                    <a href="#services" className="navbar-link">Recent Products</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Contact</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">About</a>
                </li>
            </ul> */}
        </>
    )
}

export default Navbar