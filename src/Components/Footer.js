import React from 'react'
import { FaInstagram,FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <h1 className='whatsapp'>
        <FaWhatsapp/>
        Online Support
      </h1>
      <p className='text'> We are here to assist you via WhatsApp</p>
      <h1 className='instagram'>
        <FaInstagram/>Instagram</h1>
      <p className='text'>Follow us on Instagram</p>
    </div>
  )
}

export default Footer;