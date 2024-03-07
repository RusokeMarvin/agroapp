import React from
 
"react";
import { Link, useLocation } from
 
"react-router-dom";
import Header from "../../Components/Header/Header";
import './Detail.css'
import Footer from "../../Components/Footer/Footer";

export
 
default
 
function
 
Detail() {
  const location = useLocation();
  const productData = location.state?.productData;

  return (
    <div className="Home">
      <Header />

      {productData && (
        <div className="detail">
          <img src={productData.url} alt={productData.name} />
          <h1>{productData.name}<span><Link to='/others'><button>MORE PRACTICES</button></Link></span></h1> 
          <h2>{productData.headingone}</h2>
          <p>{productData.description}</p>
          <h2>{productData.headingtwo}</h2>
          <p>{productData.headingthree}</p>
          <h2>{productData.headingfour}</h2>
          <p>{productData.headingfive}</p>
          <h2>{productData.headingsix}</h2>
          <p>{productData.headingseven}</p>
          <h2>{productData.headingeight}</h2>
          <p>{productData.headingnine}</p>
         
        </div>
      )}
      <Footer/>
    </div>
  );
}