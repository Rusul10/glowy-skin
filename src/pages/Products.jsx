import React from 'react'
import {useEffect } from 'react';

import '../styles/Products.css'
import Card from '../components/Card';

export default function Products({products,setProduct}) {

  useEffect(()=>{
     console.log(products);
   },[])
  return (
    <div className='productspage'>
    <h1>All the products available here are cruelty free 🐾🐰</h1>
    <br/>
    <div className='products'>
      {products.map((product)=>(
        <Card product={product} key={product.id} setProduct={setProduct}/>
      ))}
    </div>
    </div>
  )
}
