import React from
 
"react";
import { useLocation } from
 
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
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
         
        </div>
      )}
      <Footer/>
    </div>
  );
}