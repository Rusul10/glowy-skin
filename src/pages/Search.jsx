import React from 'react'
import '../styles/Search.css'
import {FaSearch} from "react-icons/fa"
import { useState,useEffect } from 'react';
import { db } from '../firebaseConfig';
import {collection,query,onSnapshot} from 'firebase/firestore'


export default function Search() {
  
const [input,setInput]=useState("");
const [result,setResult]=useState([]);
////fetching data another time 
const[products,setproducts]= useState([]);
  useEffect(()=>{
    const q=query(collection(db,'products'))
    onSnapshot(q,(data)=>{
    const finaldata=data.docs.map((doc)=>({id: doc.id, ...doc.data()}));
    setproducts(finaldata)
    })},[])
 /* if (input.length>0){
  setResult([]);
  let searchQuery = input.toLowerCase();
  for(const key in products){
    let product = products[key].name.toLowerCase();
    if (product.slice(0,searchQuery.length).indexOf(searchQuery) !== -1){
      setResult(prevResult =>{
        return [...prevResult,products[key].name]
      })
    }
  }
 }
 else{
  setResult([]);
 } */
 useEffect(()=>{
  let newItems = products.filter((product)=>product.name.toLowerCase().includes(input.toLowerCase()))
setResult([...newItems])
console.log(result); 
} 

 ,[input])
 
console.log(products);

 
  
  return (
    <div className='searchbar'>
      <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder='Type to search..'
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
      </div>
      <div className='searchback'>
     {/*    {
          result.map((result,index)=>(
          <a href='#' key={index}>
          <div className='searchentry'>
            {result}
            </div>
            </a>
            ))} */}
      </div>
    </div>
    
  )
}
