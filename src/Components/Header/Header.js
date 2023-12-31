import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'
import ourlogo from '../../Images/logo.png'

function Header() {
  const showSidebar = () =>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  const hideSidebar = () =>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  return (
    <div className='header'>
      <nav>
      <h1>AWCI-AGRICULTURE  </h1> 
      <img src={ourlogo} alt='logo'/>
      
      <ul className='sidebar'>
      < FontAwesomeIcon className="menu2" icon={faX} onClick={hideSidebar}/>
      <Link to="/landing"  className='linked'> <li>Home</li></Link>
      <Link to="/blog" className='linked'><li>Our Services</li></Link>
        <Link to='/gallery' className='linked'><li>Gallery</li></Link>
        <Link to="/questions" className='linked'> <li>FAQs</li></Link>
      </ul>
      <ul>
      <Link to="/landing"  className='linked2'> <li>Home</li></Link>
      <Link to="/blog" className='linked2'><li>Our Services</li></Link>
      <Link to='/gallery' className='linked2'><li>Gallery</li></Link>
        <Link to="/questions" className='linked2'> <li>FAQs</li></Link>
        < FontAwesomeIcon className="menu" icon={faBars} onClick={showSidebar}/>
      </ul>
      </nav>
      
    </div>
  )
}

export default Header
