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
    <h2>All the products are cruelty free 🐾🐰</h2>
    <br/>
    <div className='products'>
      {products.map((product)=>(
        <Card product={product} key={product.id} setProduct={setProduct}/>
      ))}
    </div>
    </div>
  )
}
