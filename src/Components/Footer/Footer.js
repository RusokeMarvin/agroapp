import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footers'>
        <footer>
          <div className='detailfooter'>
          <div>
            <h1>AWCI-AGRICULTURE</h1>
            <p>Welcome to AWCI-AGRICULTURE, where agriculture meets social impact! Discover our commitment to assisting farmers and promoting sustainable practices in goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.</p>
          </div>
          <div>
            <h1>Quick Links</h1>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
              <a href='#'>Blog</a>
              </li>
              <li>
              <a href='#'>Gallery</a>
              </li>
              <li>
              <a href='#'>FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Social Media</h1>
            <FontAwesomeIcon className='logos' icon={faFacebook}/>
            <FontAwesomeIcon className='logos' icon={faTwitter}/>
            <FontAwesomeIcon className='logos' icon={faInstagram}/>
          </div>
          <div>
          <h1>Subscribe Newsletter</h1>
          <input type='email' placeholder='Enter Email'/>
          <button>Send</button>
          </div>
          </div>
          <div className='copyright'>
          <p>Copyright ©2024 All rights reserved | AWCI International</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer