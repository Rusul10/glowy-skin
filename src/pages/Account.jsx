import React from 'react'
import { useState } from 'react';
export default function Account() {
  const [email,setEmail]= useState('');
  const [address,setAddress]=useState('');
  const handleSubmit = (e) => {e.preventDefault();
      
      alert("you're successfuly signed up"); 
     
    };
  return (
    <div>
      <div className='account'>
          <form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div className='field'>
              <label>
                Email:
              </label>
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='field'>
              <label>
               Shipping address:
              </label>
              <input value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
            </div>
            <button type="submit" >
              Register
            </button>
          </form>
      </div>
    </div>
  )
}
