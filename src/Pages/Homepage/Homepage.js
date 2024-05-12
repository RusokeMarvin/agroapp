import "./Homepage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./../../Product";
import { productData, responsive } from "./../../data";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import FeedPost from "../Feed/Feed";

export default function Home() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      headingone={item.headingone}
      headingtwo={item.headingtwo}
      headingthree={item.headingthree}
      headingfour={item.headingfour}
      headingfive={item.headingfive}
      headingsix={item.headingsix}
      headingseven={item.headingseven}
      headingeight={item.headingeight}
      headingnine={item.headingnine}
      url={item.imageurl}
      price={item.price}
      description={item.shortDescription}
    />
    
  ));

  return (
    <div className="Home">
      <Header />
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      <FeedPost />
      <Footer/>
    </div>
  );
}