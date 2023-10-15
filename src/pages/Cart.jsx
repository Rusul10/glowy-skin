import React from 'react'
export default function Cart({cartItems}) {
console.log(cartItems);
  return (
    <div>
      {cartItems[0]?.name}
    </div>
  )
}
