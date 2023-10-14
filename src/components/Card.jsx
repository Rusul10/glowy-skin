import React, { useContext } from 'react'
import '../styles/Card.css'
import { ProductContext } from '../ProductContext'
import { Link } from 'react-router-dom'
export default function Card({product}) {

  const {addToCart}=useContext(ProductContext)
  return (
    <>
      <div className='card'>
      <Link to={`ProductBuying/${product.id}`} state={product}>
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
