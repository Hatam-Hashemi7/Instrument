import React from 'react'

import { BsArrowRight } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div className='instrument__footer'>
      <div className='instrument__footer-links'>
        <div className='instrument__footer-links-sec1'>
          <p><a href='#what'>HOME</a></p>
          <p><a href='#what'>WHAT WE DO</a></p>
          <p><a href='#'>WORK</a></p>
          <p><a href='#who'>WHO WE ARE</a></p>
          <p><a href='#'>ARTICLE</a></p>
        </div>
        <div className='instrument__footer-links-sec2'>
          <p><a href='#being'>BEING HERE</a></p>
          <p><a href='#carrers'>CARRERS</a></p> 
          <p><a href='#'>CONTACT</a></p> 
          <p><a href='#'>PRIVACY</a></p>   
        </div>
      </div>
      <div className='instrument__footer-medias'>
        <button className='instrument__footer-medias-btn'>NEWSLETTER {<BsArrowRight size={12}/>} </button>
        <div className='instrument__footer-medias-icon'>
          <BsInstagram color='white' size={20} cursor='pointer'/>
          <BsTwitter color='white' size={20} cursor='pointer'/>
          <BsLinkedin color='white' size={20} cursor='pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
