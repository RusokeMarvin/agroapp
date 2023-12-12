import seeds from './Images/OIL-SEED.jpg'
import goat from './Images/goat.jpg'
import broiler from './Images/Broiler.jpg'
import vegs from './Images/vegs.jpg'
import support from './Images/support.jpg'
import irrigation from './Images/irrigation.jpg'
import teach from './Images/Teach.jpg'
import soil from './Images/soil.jpg'

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl: seeds,
      name: "Oil-Seeds",
      description: "Delve into the value addition process of oil seeds.",
    },
    {
      id: 2,
      imageurl: goat,
      name: "Goat Farming",
      description: "Dive into the world of goat farming with AWCI",
    },
    {
      id: 3,
      imageurl: broiler,
      name: "Broiler Chicken ",
      description: "Explore our innovative approach to broiler chicken rearing. ",
    },
    {
      id: 4,
      imageurl: vegs,
      name: "Vegatables",
      description: "Discover the bounty of our vegetable cultivation initiatives.",
    },
    {
      id: 5,
      imageurl: support,
      name: "Farmers' Support",
      description: "Explore the comprehensive support we provide to farmers.",
    },
    {
      id: 6,
      imageurl: irrigation,
      name: "Water Conservation",
      description: "We harness modern irrigation techniques",
    },
    {
      id: 7,
      imageurl: teach,
      name: "Training Programs",
      description: "We conduct training programs to educate local farmers",
    },
    {
      id: 8,
      imageurl: soil,
      name: " Soil Health",
      description: "We employ strategic crop rotation practices to enhance soil health",
    },
  ];