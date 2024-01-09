import goat from './Images/goat.jpg'
import broiler from './Images/Broiler.jpg'
import support from './Images/support.jpg'
import irrigation from './Images/irrigation.jpg'

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
      imageurl: goat,
      name: "Goat Farming Practices",
      description: "Dive into the world of goat farming with AWCI",
      shortDescription: "Dive into the world of goat farming with AWCI-AGRICULTURE. \
      Explore our sustainable practices, the quality of our goat breeds, and how we contribute to the local community through responsible and profitable goat farming.\
      At AWCI-AGRICULTURE, we believe in cultivating a sustainable future for both farmers and the environment. \
      Our goat farming practices prioritize ethical treatment of animals, organic feed options, and eco-friendly waste management. \
      Through responsible land use and water conservation, we aim to set a standard for environmentally conscious goat farming.Our commitment to excellence starts with the selection of high-quality goat breeds.\
       We prioritize breeds known for their adaptability, disease resistance, and superior meat or milk production. By providing farmers with these breeds,\
       we ensure a foundation for successful and sustainable goat farming.We go beyond just farming – we build communities. AWCI-AGRICULTURE facilitates a market provision system that connects local goat farmers with broader markets, ensuring fair prices for their produce. This creates economic stability within the community and encourages the growth of local businesses.\
       Embark on a unique journey with AWCI-AGRICULTURE through our agro-tourism initiative. Visitors have the opportunity to experience the daily life of a goat farm, participate in farm activities, and gain insights into sustainable farming practices. This not only educates the public but also generates additional income for farmers through tourism-related activities.\
       Ensuring the health and well-being of our goats is paramount. AWCI-AGRICULTURE has its own feed production unit, where we focus on creating nutritionally balanced and organic feed options. This not only enhances the quality of the goat products but also supports local agriculture by sourcing ingredients locally.Our breeding programs aim to improve the genetic traits of our goat herds continually. \
       Through selective breeding, we work towards enhancing disease resistance, reproductive efficiency, and overall productivity. This not only benefits our farmers but also contributes to the broader improvement of goat breeds in the region.We empower farmers with the knowledge and skills necessary for successful goat farming. Regular training sessions cover topics such as animal husbandry, disease prevention, and sustainable land management.", 
    },
    {
      id: 2,
      imageurl: broiler,
      name: "Broiler Chicken Rearing ",
      description: "Explore our innovative approach to broiler chicken rearing. ",
      shortDescription: "Explore our innovative approach to broiler chicken rearing. Learn about the ethical and sustainable methods we employ, ensuring the highest quality poultry while supporting the livelihoods of local and small scale farmers.", 
    },
    {
      id: 3,
      imageurl: support,
      name: "Farmers' Support and Training",
      description: "Explore the comprehensive support we provide to farmers.",
      shortDescription: "Explore the comprehensive support we provide to farmers. From training programs to access to resources, we are dedicated to empowering farmers for sustainable agricultural practices.", 
    },
    {
      id: 4,
      imageurl: irrigation,
      name: "Irrigation and Water Conservation",
      description: "We harness modern irrigation techniques",
      shortDescription: "Delve into the value addition...", 
    },
  ];


  