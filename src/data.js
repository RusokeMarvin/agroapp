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
      headingone:"1. Sustainable Practices in Goat Farming",
      headingtwo:"2. Quality Goat Breeds",
      headingthree:"Our commitment to excellence starts with the selection of high-quality goat breeds. We prioritize breeds known for their adaptability, disease resistance, and superior meat or milk production. By providing farmers with these breeds, we ensure a foundation for successful and sustainable goat farming.",
      headingfour:'3. Community-Centric Approach',
      headingfive:'We go beyond just farming we build communities. AWCI-AGRICULTURE facilitates a market provision system that connects local goat farmers with broader markets, ensuring fair prices for their produce. This creates economic stability within the community and encourages the growth of local businesses.',
      headingsix:'4. Agro-Tourism',
      headingseven:'Embark on a unique journey with AWCI-AGRICULTURE through our agro-tourism initiative. Visitors have the opportunity to experience the daily life of a goat farm, participate in farm activities, and gain insights into sustainable farming practices. This not only educates the public but also generates additional income for farmers through tourism-related activities.',
      headingeight:'5. Feed Production',
      headingnine:'Ensuring the health and well-being of our goats is paramount. AWCI-AGRICULTURE has its own feed production unit, where we focus on creating nutritionally balanced and organic feed options. This not only enhances the quality of the goat products but also supports local agriculture by sourcing ingredients locally.',
      description: "Dive into the world of goat farming with AWCI",
      shortDescription: "At AWCI-AGRICULTURE, we believe in cultivating a sustainable future for both farmers and the environment. Our goat farming practices prioritize ethical treatment of animals, organic feed options, and eco-friendly waste management. Through responsible land use and water conservation, we aim to set a standard for environmentally conscious goat farming.", 
    },
    {
      id: 2,
      imageurl: broiler,
      name: "Broiler Chicken Rearing ",
      headingone:"1. Dive into the world of Broiler Chicken rearing with AWCI-AGRICULTURE.",
      headingtwo:"2. Ethical and Sustainable Broiler Chicken Farming Practices",
      headingthree:"At AWCI-AGRICULTURE, our innovative approach to broiler chicken rearing is centered around ethical and sustainable practices. We prioritize the well-being of the chickens by providing spacious and comfortable living conditions, access to natural light, and a diet free from harmful additives. Our commitment to sustainability extends to waste management, ensuring minimal environmental impact.",
      headingfour:'3. Farmer Training Programs',
      headingfive:'To empower local and small-scale farmers, AWCI-AGRICULTURE conducts comprehensive training programs. Farmers are educated on ethical and sustainable broiler chicken farming methods, covering aspects such as humane treatment, responsible antibiotic use, and disease prevention. By providing knowledge and resources, we elevate the skills of farmers, leading to improved poultry farming practices.',
      headingsix:'4. Quality Breeding and Feed Formulation',
      headingseven:'We prioritize the selection of high-quality broiler chicken breeds known for their health, growth rate, and meat quality. Our nutritionists work on formulating well-balanced feeds, promoting the optimal growth and health of the chickens. This ensures the production of the highest quality poultry products for both local consumption and the market.',
      headingeight:'5. Market Sourcing and Local Supply Chains',
      headingnine:'AWCI-AGRICULTURE actively engages in market sourcing initiatives to connect broiler chicken farmers with local and regional markets. By establishing strong links with restaurants, retailers, and wholesalers, we create a sustainable supply chain that benefits both producers and consumers. This approach stimulates economic growth within the local community.',
      description: "Explore our innovative approach to broiler chicken rearing. ",
      shortDescription: "Explore our innovative approach to broiler chicken rearing. Learn about the ethical and sustainable methods we employ, ensuring the highest quality poultry while supporting the livelihoods of local and small scale farmers.", 
    },
    {
      id: 3,
      imageurl: support,
      name: "Farmers' Support and Training",
      headingone:"1. Introduction",
      headingtwo:"2. Training Programs",
      headingthree:"At the heart of our commitment to farmers' support, AWCI-AGRICULTURE offers comprehensive training programs. These programs cover a spectrum of topics, including sustainable farming practices, crop management, efficient resource utilization, and the adoption of modern agricultural technologies. Through these initiatives, we empower farmers with the knowledge and skills needed for sustainable and productive agriculture.",
      headingfour:'3. Access to Resources',
      headingfive:'Ensuring that farmers have access to essential resources is a cornerstone of our support strategy. AWCI-AGRICULTURE facilitates access to quality seeds, fertilizers, and other necessary inputs at affordable rates. We also connect farmers with financial resources and credit facilities to empower them to invest in their farms and livelihoods.',
      headingsix:'4. Technology Adoption',
      headingseven:"We embrace cutting-edge agricultural technologies to enhance farm efficiency and productivity. Our farmers' support initiatives include introducing modern farming equipment, precision agriculture techniques, and digital tools that enable farmers to make informed decisions about their crops. By staying technologically advanced, we contribute to the long-term sustainability of agriculture.",
      headingeight:'5. Crop Insurance Programs',
      headingnine:'AWCI-AGRICULTURE understands the risks inherent in farming. To mitigate these risks, we provide farmers with access to crop insurance programs. This ensures that farmers are financially protected against crop failures, adverse weather conditions, and other unforeseen challenges, fostering a sense of security in their agricultural pursuits.',
      description: "Explore the comprehensive support we provide to farmers.",
      shortDescription: "Explore the comprehensive support we provide to farmers. From training programs to access to resources, we are dedicated to empowering farmers for sustainable agricultural practices.At AWCI, we believe in empowering farmers with the knowledge and skills needed to succeed in sustainable and ethical agricultural practices. Our Farmers' Training Program is designed to provide comprehensive training covering various projects, including Goat Farming, Poultry Farming, Water Conservation, and Irrigation. This program aims to enhance farmers' capabilities, promote responsible farming, and contribute to the overall well-being of the community.", 
    },
    {
      id: 4,
      imageurl: irrigation,
      name: "Irrigation and Water Conservation",
      headingone:"1. Introduction",
      headingtwo:"2. Smart Irrigation Controllers",
      headingthree:"Utilize advanced smart controllers equipped with weather sensors and real-time data analysis to adjust irrigation schedules based on environmental conditions. This ensures precise water application, avoiding over-irrigation.",
      headingfour:'3. Drip Irrigation Systems',
      headingfive:'Implement drip irrigation for targeted water delivery directly to the base of plants. This minimizes water wastage through evaporation and runoff, promoting efficient water use.',
      headingsix:'4. Sprinkler Irrigation System',
      headingseven:'Incorporate a well-designed sprinkler irrigation system for even water distribution over a designated area. Modern sprinkler systems can be adjusted for specific crop needs.',
      headingeight:'5. Rainwater Harvesting',
      headingnine:'Implement rainwater harvesting systems to capture and store rainwater for agricultural use. This harvested water can supplement irrigation needs during dry periods.',
      description: "We harness modern irrigation techniques",
      shortDescription: "At AWCI, we recognize the critical importance of water conservation and sustainable irrigation practices in agriculture. Our ideal Water Conservation and Irrigation System are designed to optimize water usage, promote efficiency, and contribute to environmental stewardship.", 
    },
  ];


  