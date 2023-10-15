import React from 'react'
import cash from '../assets/cash.png'
import cruelty from '../assets/cruelty-free.png'
import { useState } from 'react'
import '../styles/AboutUS.css'


export default function AboutUs() {
  const [email,setEmail]= useState('');
  const [msg,setMsg]=useState('');
  const handleSubmit = (e) => {e.preventDefault();
      
      alert("your message was successfully sent"); 
     
    }; 
    
    return (
    <div className='about'>  
        <div className='caption'>   
        <h3>"One great way to help animals is by not purchasing products, or supporting industries, that cause animals to harm"
          <br></br>
        **With us, you can take care of your skin without wondering if the products are tested on animals or not because we supply cruelty-free brands here. </h3>
        </div> 
        <div className='info'>
        <div>
            <img src={cash} className='cash'/>
            <h3>Cash payment on delivery</h3>
          </div>
            <div>
            <img src={cruelty} className='rabbit'/>
            <h3>All barnds are cruelty free</h3>
          </div>
          </div>
          <div className='contact'>
          <form className='formm' onSubmit={handleSubmit}>
            <h2>Contact</h2>
            <div className='field'>
              <label>
                Email:
              </label>
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='field'>
              <label>
               Tell us you problem:
              </label>
              <input value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            </div>
            <button type="submit" >
              Send message
            </button>
          </form>
          </div>        
    </div>
  )
}
