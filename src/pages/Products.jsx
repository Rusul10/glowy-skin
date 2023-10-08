import React from 'react'
import { useState,useEffect } from 'react';
import { db } from '../firebaseConfig';
import {collection,query,onSnapshot} from 'firebase/firestore'
import '../styles/Products.css'
import Card from '../components/Card';

export default function Products() {
  const[products,setproducts]= useState([]);
  useEffect(()=>{
      const q=query(collection(db,'products'))
      onSnapshot(q,(data)=>{
      const finaldata=data.docs.map((doc)=>({id: doc.id, ...doc.data()}));
      console.log(finaldata);
      setproducts(finaldata)
      } )
   },[])


  return (
    <>
    <h1>Products</h1>
    <div className='products'>
      
      {products.map((product)=>(
        /* <div>
          <div>{product.name} </div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          {product.imageUrl ? <img src={product.imageUrl}/> : "no image"}
        </div> */
        <Card product={product} />
      ))}
    </div>
    </>
  )
}
