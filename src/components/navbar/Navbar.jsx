import React from 'react'
import "./Navbar.css"
import close from "../../assets/img/close.svg"
import logo from "../../assets/img/logo.svg"
import cart from "../../assets/img/Shopping Cart.svg"
import account from "../../assets/img/Person.svg"
import search from "../../assets/img/Search.svg"

const Navbar = () => {
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
                        <img src={search} alt="" />
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