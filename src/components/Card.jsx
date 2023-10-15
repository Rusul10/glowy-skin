import React, { useContext } from 'react'
import '../styles/Card.css'

import { Link } from 'react-router-dom'
export default function Card({product,setProduct}) {

  return (
    <>
      <div className='card'>
      <Link to={`/${product.id}`} onClick={()=>setProduct(product)} >
        <img src={product.imageUrl}/>
        <div className='title'>
          <h4 className="name">{product.name}</h4>
          <h5 className='price'>{product.price}</h5>
          
        </div>
       </Link>
      

      </div> 
    </>




  )
}
