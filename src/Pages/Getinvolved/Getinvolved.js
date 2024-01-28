import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Getinvolved.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faChild, faHandshake, faMoneyBill,faPeopleCarryBox, faPrayingHands, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import involved from './../../Images/involved.jpg'

function Getinvolved() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);
  return (
    <div >
        <Header/>
        <div className='hands'><img src={involved} className='lets' alt='hands'/></div>
        <div className='involveds'>
        <h1 data-aos="slide-right"> TO GET INVOLVED FILL THE CONTACT US FORM ON OUR HOMEPAGE </h1>
        </div>
        <h1 className='involved'>Get Involved with AWCI Agriculture Initiatives</h1>
        <p className='para1'>Welcome to AWCI Agriculture Initiatives! We invite individuals, organizations, students, and anyone passionate about sustainable agriculture to be part of our transformative projects. Whether you're interested in hands-on engagement, financial support, or spreading awareness, there's a role for everyone</p>
        <h1 className='involved'>Ways to Get Involved</h1>
        <div >
        <div className='invo'>
        <div data-aos="slide-up">
            <br/>
            <FontAwesomeIcon icon={faHandshake} className='handshake'/>
            <h2>Become a Partner</h2>
            <p>Join us in shaping the future of sustainable agriculture by exploring partnership opportunities. Collaborate with AWCI to contribute to the growth and impact of our initiatives.</p>
        </div>
        <div data-aos="slide-up">
            <FontAwesomeIcon icon={faPeopleCarryBox} className='handshake'/>
            <h2>Volunteer Opportunities</h2>
            <p>Engage actively with us by volunteering your time and skills. Our initiatives often require hands-on support, and your contribution can make a real difference.</p>
        </div>
        <div data-aos="slide-up">
        <FontAwesomeIcon icon={faMoneyBill} className='handshake'/>
            <h2>Financial Support</h2>
            <p>Support us financially to sustain and expand our ethical farming practices. Your financial contribution directly contributes to the success of our initiatives.</p>
        </div>
        </div>

        <div className='invo'>
        <div data-aos="slide-up">
        <FontAwesomeIcon icon={faBullhorn} className='handshake'/>
        <h2>Spread the Word</h2>
        <p>Help us raise awareness about AWCI Agriculture Initiatives. Share our projects, success stories, and the importance of sustainable agriculture on your social media platforms and within your community.</p>  
        </div>
        <div data-aos="slide-up">
        <FontAwesomeIcon icon={faUserGraduate} className='handshake'/>
        <h2>Farmers' Training Programs</h2>
        <p>Participate in and support our specialized training programs aimed at empowering local communities in sustainable farming practices. Your involvement can help create a knowledgeable and skilled farming community.</p>
        </div>
        <div data-aos="slide-up">
        <FontAwesomeIcon icon={faUserGroup} className='handshake'/>
        <h2>Join Community Events</h2>
        <p>Be part of our community events that foster collaboration, learning, and a sense of community. Connect with like-minded individuals and organizations to collectively contribute to the success of our initiatives.</p>  
        </div>
        </div>

        <div className='invo'>
        <div data-aos="slide-up">
        <FontAwesomeIcon icon={faChild} className='handshake'/>
        <h2>Student Engagement</h2>
        <p>Students can play a crucial role in the future of sustainable agriculture. Contribute through research, internships, and educational initiatives focused on responsible farming practices.</p>  
        </div>
        <div data-aos="slide-up">
        <FontAwesomeIcon icon={faPrayingHands} className='handshake'/>
        <h2>Collaborate on Research</h2>
        <p>Collaborate with us on research projects to further the development of sustainable farming practices. Your expertise and insights can contribute to the continuous improvement of our initiatives.</p>  
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Getinvolved