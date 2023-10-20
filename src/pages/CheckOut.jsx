import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CheckOut.css'
import thanks from '../assets/thanks.gif'
export default function CheckOut() {
  return (
    <div className='checkout-comp'>
      <div className='confirm'>
        <h2>Yay! Order Confirmed</h2>
        <img className='thanks' src={thanks}/>
        <p>Your order number is: #{Math.floor(Math.random()*10000000000)} </p>
        <p>The order will be delivered within one day </p>
      </div>
      <button className='backhome'>
          <Link to="/">Back to Home</Link>
      </button>
    </div>
  )
}
