import React from 'react'
import dark from '../assets/dark.jpg'
import acne from '../assets/acne.jpg'
import shine from '../assets/shine.jpg'
import all from '../assets/all.jpg'
import '../styles/SkinTypes.css'
export default function SkinTypes() {
  return (
    <div className='skintype'>
      <div className='cards'>
        <div className='darker skincard'>
          <img src={dark}></img>
          <h1>
            Darker skin tones
          </h1>
        </div>
        <div className='acne skincard'>
          <img src={acne}></img>
          <h1>
            Acne skin 
          </h1>
          
        </div>
        <div className='oily skincard'>
          <img src={shine}></img>
          <h1>
            Oily skin / Dry skin 
          </h1>
          
        </div>
        <div className='all skincard'>
        <img src={all}></img>
          <h1>
            Simple skin care routine for all skin types
          </h1>
          
        </div>
      </div>
    </div>
  )
}
