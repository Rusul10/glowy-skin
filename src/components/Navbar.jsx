import React from 'react'
import logo from '../assets/Frame 8.svg'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
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
    </nav>
    </div>
  )
}
