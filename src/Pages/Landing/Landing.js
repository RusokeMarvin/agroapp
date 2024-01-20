import Header from './../../Components/Header/Header';
import landing from './../../Images/landing.jpg'
import person1 from './../../Images/person1.jpg'
import person2 from './../../Images/person2.jpg'
import './Landing.css'
import Footer from '../../Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import seeds from './../../Images/OIL-SEED.jpg'
import goat from './../../Images/goat1.jpeg'
import broiler from './../../Images/broiler1.jpeg'
import vegs from './../../Images/vegs.jpg'
import involved from './../../Images/Teach.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';



const Landing =()=> {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    landing,
    seeds,
    goat,
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
          <h3  className="typing-demo">Welcome to AWCI-AGRICULTURE, where agriculture meets social impact!</h3>
        </div>
        <div className='wrapper'>
          <img src={goat} alt={`Slide 2`} />
          <h3 className="typing-demo">Dive into the world of goat farming with AWCI-AGRICULTURE</h3>
        </div>
        <div className='wrapper'>
          <img src={broiler} alt={`Slide 4`} />
          <h3 className="typing-demo">Explore our innovative approach to broiler chicken rearing with AWCI-AGRICULTURE. </h3>
        </div>
      </Slider>
      
      </div>
    <div className='info'>
      <br/>
    <h1>ABOUT US</h1>
    <p>Welcome to AWCI-AGRICULTURE, where agriculture meets social impact! Discover our commitment to assisting farmers and promoting sustainable practices in goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.</p>
    <p>Learn about our mission, vision, and the team behind AWCI-AGRICULTURE. Explore our journey in creating a positive impact on the agricultural sector and empowering local farmers.</p>
    <h1>MISSION</h1>
    <p>At AWCI-AGRICULTURE, our mission is to elevate the lives of Ugandan farmers by promoting sustainable agriculture and creating opportunities for economic growth through goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.</p>

<h1>VISION</h1>
<p>A future where Ugandan agriculture is a beacon of sustainability and prosperity, with farmers at the forefront of a thriving and interconnected community, supported by ethical and environmentally conscious practices.</p>
<br/>
</div>
<h1 className='heading'>GET INVOLVED</h1>
<div className='getinvolved' data-aos="slide-up">
  <br/>
  <img src={involved} />
  <div className='infos'>
    <h2>WOULD YOU LOVE TO BE PART OF THIS INITIATIVE</h2>
  <p>Welcome to AWCI Agriculture Initiatives! We invite individuals, organizations, students, and anyone passionate about sustainable agriculture to be part of our transformative projects. Whether you're interested in hands-on engagement, financial support, or spreading awareness, there's a role for everyone.</p>
  <Link to='/getinvolved'><button>GET INVOLVED</button></Link>
  </div>

</div>
<h2 className='contact'>CONTACT US</h2>
<h3 className='subcontact'>Let's Unite to improve our agricultural practices together</h3>
<p className='subsubcontact' data-aos="slide-up">Thank you for your interest in our Agriculture Initiative. We appreciate your support and collaboration. If you have any questions or would like to get in touch, please feel free to contact us using the following details:</p>
<div className='contactform' data-aos="zoom-in">
  <h2>Contact Form</h2>
  <form >
  <br/>
    <div className='names'>
      <div>
      <label>First Name</label>
      <br/>
      <br/>
      <input type='name'/>
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
    <input type='email'/>
    </div>
    <br/>
    <div className='fields'>
    <label>Subject</label>
    <br/>
    <br/>
    <input type='text'/>
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
    <input type='submit' className='submit'/>
    </div>
    </div>
    <br/>
  </form>
</div>
<h1 className='heading'>OUR TEAM</h1>
<div className='team'>
  <div data-aos="zoom-in" >
    <img src={person1}/>
    <h1>Yusuf Kavuma</h1>
    <h2>Founder and Executive Director</h2>
    <p>Very Delighted to share my knowledge and experience for the betterment of the society</p>
  </div>
  <div data-aos="zoom-in">
    <img src={person2}/>
    <h1>Lugaizi Mujib</h1>
    <h2>Director Finance and Management</h2>
    <p>Very Delighted to share my knowledge and experience for the betterment of the society</p>
  </div>
</div>
    <Footer/>
    </div>
  );
}

export default Landing;
