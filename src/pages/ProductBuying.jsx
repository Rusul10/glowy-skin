import React from 'react'
import { useState,useEffect } from 'react';
import '../styles/ProductsBuying.css'

export default function ProductBuying({product, handleClick,}) {
 useEffect(()=>{
  console.log(product);
 },[]) 


return (
    <div >      
        <div className='product-info'>
            <div className='card1'>
              <img src={product?.imageUrl}/>
            </div>         
            <div className='card2'>
              
              <h3 className="name">{product?.name}</h3>
              
              <h5 className='price'>Price: {product?.price}</h5>
              <br/>
             {/*  <div className='quantity'>
                <button className='btn' >+</button>
              { {quantity} }
                <button className='btn' onClick={handleChange} >-</button>
                {<button className='addtocart' onClick={()=>setCartItems((prev)=>[...prev,product])}>Add to cart</button>}
                
              </div>  */}
              
                  <h4>Description:</h4>
                  {product?.description}
                  <br/>
                  <br/>
              <div id='addbutton'>
                 <button className='addtocart' onClick={()=>handleClick(product)}>Add to cart</button>
              </div>
            </div>
        </div> 
    </div>
  )
}
