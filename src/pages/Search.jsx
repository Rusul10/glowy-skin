import React from 'react'
import '../styles/Search.css'
import {FaSearch} from "react-icons/fa"
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Search({products,setProduct}) {  
const [input,setInput]=useState("");
const [result,setResult]=useState([]);

 useEffect(()=>{
  let newItems = products.filter((product)=>product.name.toLowerCase().includes(input.toLowerCase()))
setResult([...newItems])
if (input=='') 
setResult([])
console.log(result);

} ,[input])

  return (
    <div className='search-comp'>
    <div className='searchbar'>
      <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input className='searchbar-input' placeholder='Type to search..'
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
      </div>
      <div className='searchresult'>
        
        {
          result.map((item,i)=>(
            <Link to={`/${item.id}` } onClick={()=>setProduct(item)} key={i}>
            <div className='searchresult-card'>
              <div className='search-result-item'>
                <img src={item.imageUrl}/>
                <h5>{item.name}</h5>
              </div>
            </div>
            </Link>
          ))
        }
      </div>
    </div>
    </div>
    
  )
}
