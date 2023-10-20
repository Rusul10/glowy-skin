import React from 'react'
import logo from '../assets/Frame 8.svg'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import acc from '../assets/account.png'
import cart from '../assets/cart.png'
import search from '../assets/search.png'

export default function Navbar({size}) {
  return (
    <div>
    <nav className="navbar">
      <div className='leftSide'>
        <img src={logo} alt="pic"/>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/skintypes">Skin types</Link>
        <Link to="/products">Products</Link>
        <Link to="/aboutus">About us</Link>
      </div>
      <div className='right'>
        <Link to="search"> 
        <img src={search}/>
        </Link>
        <Link to="cart"> 
        <img className='cart-icon' src={cart}/>
        <span className='cartitems-num'>{size}</span>
        </Link>
        <Link to="account"> 
        <img src={acc}/>
        </Link>
      </div>
    </nav>
    </div>
  )
}
