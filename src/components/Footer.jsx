import React from 'react'
import logo from '../assets/Frame 8.svg'
import '../styles/Footer.css'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col social-icon'>
          <SocialIcon bgColor="white" fgColor=" #B0C9CC" url="www.instagram.com" />
          <SocialIcon bgColor="white" fgColor=" #B0C9CC" url="www.facebook.com" />
          <SocialIcon bgColor="white" fgColor=" #B0C9CC" url="www.snapchat.com" />
          <SocialIcon bgColor="white" fgColor=" #B0C9CC" url="www.twitter.com" />
        </div>
        <div className='col'>
          <img src={logo} alt="png" />
        </div>
        <div className='col'>
          <p>
            all rights reserved by Rusul 🩷
          </p>
        </div>
      </div>
    </div>
  )
}
