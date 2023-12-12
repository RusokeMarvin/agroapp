import "./Homepage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./../../Product";
import { productData, responsive } from "./../../data";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="Home">
      <Header />
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      <Footer/>
    </div>
  );
}