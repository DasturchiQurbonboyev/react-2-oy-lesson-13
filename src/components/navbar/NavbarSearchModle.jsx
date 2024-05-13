import React from 'react'
import { flushSync } from 'react-dom'



const NavbarSearchModle = ({ data }) => {
    let searchItems = data?.map((el) => (
        <div key={el.id} className='search__result__box'>
            <img src={el.thumbnail} width={60} alt="" />
            <span>{el.title}</span>
        </div>
    ))
    return (
        <div className='navbar__search__result' >
            {searchItems}
        </div>
    )
}

export default NavbarSearchModle