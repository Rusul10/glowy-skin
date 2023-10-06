import React from 'react'
import { useState,useEffect } from 'react';
import { db } from '../firebaseConfig';
import {collection,query,onSnapshot} from 'firebase/firestore'

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
    <div>
      <h1>Products</h1>
      {products.map((product)=>(
        <div>{product.name} {product.price} <br></br> {product.description}</div>
        
      ))}
    </div>
  )
}
