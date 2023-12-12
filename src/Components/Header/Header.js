import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <nav>
      <h1>AWCI-AGRICULTURE</h1> 
      <ul>
      <Link to="/home" className='linked'> <li>Home</li></Link>
        <li>About Us</li>
        <li>Gallery</li>
        <Link to="/questions" className='linked'> <li>FAQs</li></Link>
      </ul>
      </nav>
      
    </div>
  )
}

export default Header
