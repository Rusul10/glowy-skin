import React from 'react'
import hero from '../assets/hero2.png'
import '../styles/Home.css'
export default function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        
         {/*  <img src={hero} className='hero-image'/>
          <img src={hero} className='hero-image-blurred'/> */}
          <h1>Let your skin glow with<br></br> little love</h1>
          <br></br>
          
          <div className='shopnow'>
          <button>Shop Now</button>
          </div>
        
        
      </div>
    </div>
  )
}
