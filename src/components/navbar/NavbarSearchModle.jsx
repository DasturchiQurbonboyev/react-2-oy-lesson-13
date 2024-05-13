import React from 'react'



const NavbarSearchModle = ({ data }) => {
    console.log(data);
    let searchItems = data?.map((el) => (
        <div key={el.id} title={el.title} className='search__result__box'>
            <div width={60}>
                <img src={el.thumbnail} width={60} alt="" />
            </div>
            <span>{el.title}</span>
        </div>
    ))
    return (
        <div className='navbar__search__result' >
            {data.length ? searchItems :
                <div>
                    <p style={{ color: "black" }}>Malumot topilmadi!!!</p></div>}
        </div>
    )
}

export default NavbarSearchModle