import Header from './../../Components/Header/Header';
import landing from './../../Images/landing.jpg'
import person1 from './../../Images/person1.jpg'
import person2 from './../../Images/person2.jpg'
import person3 from './../../Images/person3.jpg'
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

  return (
    <div className='landing'>
    <Header/>
    <div className='images'>
    <Slider {...settings}>
        <div>
          <img src={landing} alt={`Slide 1`} />
          <h3>Welcome to AWCI-AGRICULTURE, where agriculture meets social impact!</h3>
        </div>
        <div>
          <img src={seeds} alt={`Slide 2`} />
          <h3>Delve into the value addition process of oil seeds with AWCI-AGRICULTURE.</h3>
        </div>
        <div>
          <img src={goat} alt={`Slide 3`} />
          <h3>Dive into the world of goat farming with AWCI-AGRICULTURE</h3>
        </div>
        <div>
          <img src={vegs} alt={`Slide 4`} />
          <h3>Discover the bounty of our vegetable cultivation initiatives with AWCI-AGRICULTURE.</h3>
        </div>
        <div>
          <img src={broiler} alt={`Slide 5`} />
          <h3>Explore our innovative approach to broiler chicken rearing with AWCI-AGRICULTURE. </h3>
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
<h1 >GET INVOLVED</h1>
<div className='getinvolved'>
  <br/>
  <img src={involved} />
  <div className='infos'>
    <h2>WOULD YOU LOVE TO BE PART OF THIS INITIATIVE</h2>
  <p>Welcome to AWCI Agriculture Initiatives! We invite individuals, organizations, students, and anyone passionate about sustainable agriculture to be part of our transformative projects. Whether you're interested in hands-on engagement, financial support, or spreading awareness, there's a role for everyone.</p>
  <button>GET INVOLVED</button>
  </div>

</div>
<h1 >OUR TEAM</h1>
<div className='ourteam'>
<div className='team'>
  <div>
    <img src={person1}/>
    <h1>Yusuf Kavuma</h1>
    <h2>Founder and Executive Director</h2>
    <p>Very Delighted to share my knowledge and experience for the betterment of the society</p>
  </div>
  <div>
    <img src={person2}/>
    <h1>Lugaizi Mujib</h1>
    <h2>Director Finance and Management</h2>
    <p>Very Delighted to share my knowledge and experience for the betterment of the society</p>
  </div>
</div>


</div>
    <Footer/>
    </div>
  );
}

export default Landing;
