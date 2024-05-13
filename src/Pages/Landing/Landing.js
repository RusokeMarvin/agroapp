import Header from './../../Components/Header/Header';
import landing from './../../Images/landing.jpg'
import person1 from './../../Images/goats.jpg'
import person2 from './../../Images/broiler1.jpeg'
import person3 from './../../Images/irrigation.jpg'
import './Landing.css'
import Footer from '../../Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import seeds from './../../Images/OIL-SEED.jpg'
import goats from './../../Images/goats.jpg'
import about from './../../Images/about.jpg'
import mission from './../../Images/mission.jpeg'
import vision from './../../Images/vision.jpg'
import broiler from './../../Images/broiler1.jpeg'
import vegs from './../../Images/vegs.jpg'
import involved from './../../Images/Teach.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Landing =()=> {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0x2guw7', 'template_teorvmm', form.current, '2m2X5MCgmX8OAC92t')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage('Email sent successfully!');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const images = [
    landing,
    seeds,
    goats,
    vegs,
    broiler,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    autoplay: true, // Add this line to enable autoplay
    autoplaySpeed: 2000, //
  };

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  
  return (
    <div className='landing'>
    <Header/>
    <div className='images'>
    <Slider {...settings}>
        <div className='wrapper'>
          <img src={landing} alt={`Slide 1`} />
          <div className='pentagon'><h5>Welcome to AWCI</h5></div>
          <h3  className="typing-demo">Welcome to AWCI-AGRICULTURE, where agriculture meets social impact!</h3>
        </div>
        <div className='wrapper'>
          <img src={goats} alt={`Slide 2`} />
          <div className='pentagon'><h5>Goat Farming </h5></div>
          <h3 className="typing-demo">Dive into the world of goat farming with AWCI-AGRICULTURE</h3>
        </div>
        <div className='wrapper'>
          <img src={broiler} alt={`Slide 4`} />
          <div className='pentagon'><h5>Broiler Chicken</h5></div>
          <h3 className="typing-demo">Explore our innovative approach to broiler chicken rearing with AWCI. </h3>
        </div>
      </Slider>
      
      </div>
    <div className='infoinfo' data-aos="slide-up">
     <h1>About Us</h1>
     <p>Welcome to AWCI-AGRICULTURE, where agriculture meets social impact! Discover our commitment to assisting farmers and promoting sustainable practices in goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.</p> 
     
   </div>
   <div className='infocontainer' data-aos="slide-up">
    <section className='about'>
      <div className='aboutimage'>
        <img src={about} alt='aboutus'/>
      </div>
      <div className='aboutcontent' >
        <h2>Explore</h2>
        <p>Learn about our mission, vision, and the team behind AWCI-AGRICULTURE. Explore our journey in creating a positive impact on the agricultural sector and empowering local farmers.</p>
        <a href='/about' className='readmore'>Read More</a>
      </div>
    </section>
   </div>
   <div className='infoinfo'data-aos="slide-up">
     <h1>Mission</h1>
     <p>At AWCI-AGRICULTURE, our mission is to elevate the lives of Ugandan farmers by promoting sustainable agriculture and creating opportunities for economic growth through goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.</p> 
     
   </div>
   <div className='infocontainer'data-aos="slide-up">
    <section className='about'>
      <div className='aboutimage'>
        <img src={mission} alt='mission'/>
      </div>
      <div className='aboutcontent'>
        <h2>Explore</h2>
        <p>At AWCI-AGRICULTURE, our mission is to elevate the lives of Ugandan farmers by promoting sustainable agriculture and creating opportunities for economic growth through goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.</p>
        <a href='/mission' className='readmore'>Read More</a>
      </div>
    </section>
   </div>
   <div className='infoinfo' data-aos="slide-up">
     <h1>Vision</h1>
     <p>A future where Ugandan agriculture is a beacon of sustainability and prosperity, with farmers at the forefront of a thriving and interconnected community, supported by ethical and environmentally conscious practices.</p> 
     
   </div>
   <div className='infocontainer' data-aos="slide-up">
    <section className='about'>
      <div className='aboutimage'>
        <img src={vision} alt='vision'/>
      </div>
      <div className='aboutcontent' >
        <h2>Explore</h2>
        <p>A future where Ugandan agriculture is a beacon of sustainability and prosperity, with farmers at the forefront of a thriving and interconnected community, supported by ethical and environmentally conscious practices.</p>
        <a href='/vision' className='readmore'>Read More</a>
      </div>
    </section>
   </div>
   <div className='infoinfo' data-aos="slide-up">
     <h1>Get Involved</h1>
     <p>A future where Ugandan agriculture is a beacon of sustainability and prosperity, with farmers at the forefront of a thriving and interconnected community, supported by ethical and environmentally conscious practices.</p> 
     
   </div>
   <div className='infocontainer' data-aos="slide-up">
    <section className='about'>
      <div className='aboutimage'>
        <img src={involved} alt='aboutus'/>
      </div>
      <div className='aboutcontent' >
        <h2>Join us</h2>
        <p>Welcome to AWCI Agriculture Initiatives! We invite individuals, organizations, students, and anyone passionate about sustainable agriculture to be part of our transformative projects. Whether you're interested in hands-on engagement, financial support, or spreading awareness, there's a role for everyone.</p>
        <a href='/getinvolved' className='readmore'>Read More</a>
      </div>
    </section>
   </div>
  
<h2 className='contact'  data-aos="slide-up">CONTACT US</h2>
<h3 className='subcontact'  data-aos="slide-up">Let's Unite to improve our agricultural practices together</h3>
<p className='subsubcontact' data-aos="slide-up">Thank you for your interest in our Agriculture Initiative. We appreciate your support and collaboration. If you have any questions or would like to get in touch, please feel free to contact us using the following details:</p>
<br/>
<div className='combined' data-aos="zoom-in">
<div className='contactform' >
  <h2>Contact Form</h2>
  <form ref={form} onSubmit={sendEmail}>
  <br/>
    <div className='names'>
      <div>
      <label>First Name</label>
      <br/>
      <br/>
      <input type='name' name="user_name"/>
      </div>
      <div >
      <label>Last Name</label>
      <br/>
      <br/>
      <input type='name'/>
      </div>
    </div>
    <br/>
    <div className='bigfield'>
    <div className='fields'>
    <label>Email</label>
    <br/>
    <br/>
    <input type='email' name="user_email"/>
    </div>
    <br/>
    <div className='fields'>
    <label>Subject</label>
    <br/>
    <br/>
    <input type='text' name="message"/>
    </div>
    <br/>
    <div className='fields'>
    <label>Message</label>
    <br/>
    <br/>
    <input type='text'/>
    </div>
    <br/>
    <div className='fields'>
    <input type='submit' value="Send" className='submit'/>
    </div>
    </div>
    <br/>
  </form>
   {successMessage && <p className='success-message'>{successMessage}</p>}
</div>
<div className='address'>
<h2 className='h2'>Address</h2>
<p className='p'>Next to Hexa Oils, St Mark Rd, Namagoma B, Kampala, Uganda</p>
<h2 className='h2'>Phone</h2>
<p className='p'>+256 741 750-372</p>
<h2 className='h2'>Email Address</h2>
<p className='p'>info@awciinternational.org</p>
<h2 className='h2'>Postal Address</h2>
<p className='p'>P.O.Box 116062, Kampala GPO</p>
</div>
</div>
<h1 className='heading'>RECENT NEWS</h1>
<div className='team'>
  <div data-aos="zoom-in" className='teambackground'>
    <img src={person1}/>
    <h1>Sustainable Livestock</h1>
    <p>Nurturing Excellence: Unveiling the Art of Successful Goat Farming.Explore the world of sustainable practices, expert care....</p>
    <h3>Read More</h3>
  </div>
  <div data-aos="zoom-in" className='teambackground'>
    <img src={person2}/>
    <h1>Elevating Broiler Chicken Rearing</h1>
    <p>From Brood to Bloom: Elevating Broiler Chicken Rearing with Expert Techniques.Discover the art and science behind success...</p>
    <h3>Read More</h3>
  </div>
  <div data-aos="zoom-in" className='teambackground'>
    <img src={person3}/>
    <h1>Smart Irrigation</h1>
    <p>Nurturing Growth Drop by Drop: Mastering the Art of Efficient Irrigation.Dive into the world of smart watering practices and empower your small-scale farm with the key......</p>
    <h3 className='readmore'>Read More</h3>
  </div>
</div>
    <Footer/>
    </div>
  );
}

export default Landing;
