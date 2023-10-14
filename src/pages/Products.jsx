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
      setproducts(finaldata)
      } )
   },[])
  return (
    <div className='productspage'>
    <h1>All the products available here are cruelty free 🐾🐰</h1>
    <br/>
    <div className='products'>
      {products.map((product)=>(
        <Card product={product} />
      ))}
    </div>
    </div>
  )
}
