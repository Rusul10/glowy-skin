import React, { useState } from 'react'
import logo from '../assets/Frame 8.svg'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import acc from '../assets/account.png'
import cart from '../assets/cart.png'
import search from '../assets/search.png'
import { FcMenu } from "react-icons/fc"

export default function Navbar({size}) {
const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar =()=>{
    setOpenLinks(!openLinks)
  };
return (
    <div>
    <nav className="navbar">
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src={logo} alt="pic"/>
        <div className='hiddenLinks'>
        <div className='hidden1'>
          <Link to="/">Home</Link>
          <Link to="/skintypes">Skin types</Link>
          <Link to="/products">Products</Link>
          <Link to="/aboutus">About us</Link>
          </div>
          <div className='hidden2'>
          <Link to="search"> Search</Link>
          <Link to="cart">Cart</Link>
          <Link to="account"> Account </Link>
          </div>
        </div>
      </div>
      <div className='rightSide'>
        <div className='part1'>
          <Link to="/">Home</Link>
          <Link to="/skintypes">Skin types</Link>
          <Link to="/products">Products</Link>
          <Link to="/aboutus">About us</Link>
        </div>
        <div className='part2'>
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
        <button onClick={toggleNavbar} className='fc-Menu'>
          <FcMenu id='fc-Menu'/>
        </button>
      </div>
     
    </nav>
    </div>
  )
}
