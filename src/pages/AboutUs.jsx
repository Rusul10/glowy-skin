import React from 'react'
import cash from '../assets/cash.png'
import cruelty from '../assets/cruelty-free.png'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/AboutUS.css'


export default function AboutUs() {
  const [email,setEmail]= useState('');
  const [msg,setMsg]=useState('');
  const handleSubmit = (e) => {e.preventDefault();
      
    emailjs.sendForm('service_77aongp','template_19euw4d',e.target, 'z7aAPhSUzGMEJ121A')  
    alert("your message was successfully sent"); 
     
    }; 
    
    return (
    <div className='about'>  
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
       
        <div className='caption' >
          <div className='caption-card' id='scroll-container'>
            <div className='caption-front' id='scroll-text'>  
              <div className='first' >
                <h3>
                <img src={cruelty} id='rabbit-icon'/>
                One great way to help animals is by not purchasing products, or supporting industries, that cause animals to harm
                <img src={cruelty} id='rabbit-icon'/>
                </h3>
                <p>
                With us you can take care of your skin without wonderin if the products are tested on animals or not because we supply cruelty-free brands here.
                </p>
              </div>
            </div>
          </div>
        </div>

          <div className='contact'>
          <form onSubmit={handleSubmit}>
            <h2>Contact</h2>
            <div className='field'>
              <label>
                Email:
              </label>
              <input value={email} name='email_from' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='field'>
              <label>
               Tell us you problem:
              </label>
              <input className='problem' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            </div>
            <button className='register' type="submit" >
              Submit
            </button>
          </form>
          </div>        
    </div>
  )
}
