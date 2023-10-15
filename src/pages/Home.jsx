import React from 'react'
import hero from '../assets/1400.png'
import '../styles/Home.css'
import Products from './Products'
import { Route, Routes, useNavigate } from 'react-router-dom'


export default function Home() {
const navigate =useNavigate();
  const handleClick =()=>{
    navigate('/Products');
  };
  return (
    <div className='home'>
      <div className='headerContainer'>
        
        <div className='hero-image'>
            <img src={hero} />
          </div>
          <h1>Let your skin glow with<br></br> little love</h1>
          
          <div className='shopnow'>
          <button onClick={handleClick}>Shop Now</button>
          </div>
        <Routes>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
        
      </div>
    </div>
  )
}
