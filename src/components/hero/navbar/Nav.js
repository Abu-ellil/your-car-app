import React from 'react'

const Nav = () => {
  return (
    <nav className='nav'>
        <div className="logo"><span>Your</span>Car</div>
        <div className='links-cart'>
        <div className="links">
            <li><a href="" className='active'>Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Cars</a></li>
            <li><a href="">Contact us</a></li>
        </div>
        <div className="cart">Cart</div>
        </div>
    </nav>
  )
}

export default Nav