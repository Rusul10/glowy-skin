import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/Cart.css'
import { Link } from 'react-router-dom';

export default function Cart({cartItems, setCartItems,handleChange}) {
const [dicount,setDicount]= useState(['fall','halloween','rusul'])
const [price,setPrice]=useState(0);

console.log(cartItems);
const handlePrice =()=>{
  let ans =0;
  cartItems.map((item)=>(
  ans+=item.amount*parseFloat(item.price)))
  setPrice(ans);
}

let subtotal = +price;
let total = subtotal + 5000;

const handleRemove = (id)=>{
  const arr = cartItems.filter((item)=>item.id !== id);
  setCartItems(arr);
}

useEffect(()=>{
  handlePrice();
})

const handleClick =()=>{
  if (cartItems.length ==0);
  return;
}
console.log(cartItems.length+"heeeeeeeeeey");
return (
  <div className='cart-comp'>
    <div className='cart'>
      {cartItems.map((item)=>(
        <div className='cart-box' key={item.id}> 
          <div className='cart-img'>
            <img src={item.imageUrl}/>
            <p>{item.name}</p>
          </div>
          <div className='quantity-inc-dec'>
            <button onClick={()=>handleChange(item.id,+1)}> + </button>
              <p>{item.amount}</p>
            <button onClick={()=>handleChange(item.id,-1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))
      }
      <div className='discount'>
        <input placeholder='Discount code' onChange={(e)=>{setDicount(e.target.value)}}/>
        <button type='submit'>Apply</button>
      </div>
      <div className='subtotal'>
        <span>Subtotal</span>
        <span> {subtotal.toLocaleString()} IQD </span>
      </div>
      <div className='cost'>
        <span>Shipping cost</span>
        <span> 5,000 IQD</span>
      </div>
      <div className='total'>   
        <span>Total</span>
        <span> {total.toLocaleString()} IQD </span>
      </div>
      <div className='checkout'>
        <button onClick={handleClick}>
          <Link to="/checkout">Checkout</Link>
        </button>
      </div>
    </div>
    </div>
  )
}
