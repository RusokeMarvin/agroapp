import React from 'react'
import './Mission.css'
import mission from './../../Images/mission.jpeg'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Mission() {
  return (
    <div>
      <div className='uppermost'>
      <Header/>
      <div className='upper'>
      <h1>Mission</h1>
      </div>
      </div>
    <div className='infocontainer'>
    <section className='about'>
      <div className='aboutimage'>
        <img src={mission} alt='aboutus'/>
      </div>
      <div className='aboutcontent' >
      <h2>Explore</h2>
        <p>A future where Ugandan agriculture is a beacon of sustainability and prosperity, with farmers at the forefront of a thriving and interconnected community, supported by ethical and environmentally conscious practices.</p>
      </div>
    </section>
   </div>
   <Footer/>
   </div>
  )
}

export default Mission