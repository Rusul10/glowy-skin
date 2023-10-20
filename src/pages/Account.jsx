import React from 'react'
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Account.css'
export default function Account() {
  const nav= useNavigate();
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const handleSubmit = (e) => {e.preventDefault();
  
    nav("/")
  }; 

  const signIn = async() => {
    await createUserWithEmailAndPassword(auth,email,password);
     
    };
  return (
    <div className='account-comp'>
    <div className='account'>
      <div >
          <form className='signUp-form' onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div className='Field'>
                <label>
                  Name:
                </label>
                <input type="text" onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div className='field'>
              <label>
                Email:
              </label>
              <input onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='field'>
              <label>
                Password:
              </label>
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
           
            <div className='field'>
            <button className='register' type="submit" onClick={signIn} >
              Register
            </button>
            </div>
          </form>
      </div>
    </div>
    </div>
  )
}
