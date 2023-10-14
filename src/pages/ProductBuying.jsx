import React from 'react'
import { useState,useEffect } from 'react';
import { db } from '../firebaseConfig';
import {collection,query,onSnapshot} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import '../styles/ProductsBuying.css'

export default function ProductBuying() {
//// params used for matching the ids
const params = useParams();
////fetching data another time 
const[products,setproducts]= useState([]);
useEffect(()=>{
    const q=query(collection(db,'products'))
    onSnapshot(q,(data)=>{
    const finaldata=data.docs.map((doc)=>({id: doc.id, ...doc.data()}));
    setproducts(finaldata)
    } )
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
        {products.map((product)=>product.id===params.id?
        <div className='product-info'>
          <img src={product.imageUrl}/>
          
            <div className='card2'>
              <div>
              <h2 className="name">{product.name}</h2>
              </div>
              <h4 className='price'>Price: {product.price}</h4>
              <br/>
              <div className='quantity'>
                <button className='btn' onClick={handleInc}>+</button>
                {quantity}           
                <button className='btn' onClick={handleDec}>-</button>
             
                  <button className='addtocart'>Add to cart</button>
              </div> 
              <br/>
              <div  className='description'>
                  <h4>Description:</h4>
                  <br/>
                  {product.description}
              </div>  
            </div>
        </div>
        :
        console.log(''))}
        
    </div>
  )
}
