import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <nav>
      <h1>AWCI-AGRICULTURE</h1> 
      <ul>
      <Link to="/landing"  className='linked'> <li>Home</li></Link>
      <Link to="/blog" className='linked'><li>Blog</li></Link>
        <li>Gallery</li>
        <Link to="/questions" className='linked'> <li>FAQs</li></Link>
      </ul>
      </nav>
      
    </div>
  )
}

export default Header
