import React from 'react'
import { useState,useEffect } from 'react';
import '../styles/ProductsBuying.css'

export default function ProductBuying({product,cartItems, setCartItems,handleClick}) {

/* 
const params = useParams(); */
////fetching data another time 

 useEffect(()=>{
  console.log(product);
 },[]) 


let[quantity,setQuantity]=useState(1);
const handleInc = () => {
  setQuantity(quantity+1);
};
const handleDec = () => {
  setQuantity(quantity-1);
};


return (
    <div >      
        <div className='product-info'>
            <div className='card1'>
              <img src={product?.imageUrl}/>
            </div>         
            <div className='card2'>
              <div>
              <h2 className="name">{product?.name}</h2>
              </div>
              <h4 className='price'>Price: {product?.price}</h4>
              <br/>
              <div className='quantity'>
                <button className='btn' onClick={handleInc}>+</button>
                {quantity}           
                <button className='btn' onClick={handleDec}>-</button>
                {/* <button className='addtocart' onClick={()=>setCartItems((prev)=>[...prev,product])}>Add to cart</button> */}
                <button className='addtocart' onClick={()=>handleClick(product)}>Add to cart</button>
              </div> 
              <br/>
              <div  className='description'>
                  <h4>Description:</h4>
                  <br/>
                  {product?.description}
              </div>  
            </div>
        </div> 
    </div>
  )
}
