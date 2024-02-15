import React from 'react'
import './About.css'
import about from './../../Images/about.jpg'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div>
      <div className='uppermost'>
      <Header/>
      <div className='upper'>
      <h1>About Us</h1>
      </div>
      </div>
    <div className='infocontainer'>
    <section className='about'>
      <div className='aboutimage'>
        <img src={about} alt='aboutus'/>
      </div>
      <div className='aboutcontent' >
        <h2>Explore</h2>
        <p>Learn about our mission, vision, and the team behind AWCI-AGRICULTURE. Explore our journey in creating a positive impact on the agricultural sector and empowering local farmers.</p>
        
      </div>
    </section>
   </div>
   <Footer/>
   </div>
  )
}

export default About