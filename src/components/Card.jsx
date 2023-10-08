import React from 'react'
import '../styles/Card.css'
export default function Card({product}) {

  return (
    
    
      <div className='card'>
        <img src={product.imageUrl}/>
        <div className='title'>
          <span className="name">{product.name}</span>
          <span className='price'>{product.price}</span>
        </div>
        
      
      {/* <div className='card2'>
        <div>
        <span className='description'>{product.description}</span>
        </div>  
        <div>
          <button>Add to cart</button>
        </div>
*/}

      </div> 





  )
}
