import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { name, url, price, description, shortDescription,headingone,headingtwo,headingthree,headingfour,headingfive,headingsix,headingseven,headingeight,headingnine  } = props;

  return (
    <div className="card" >
      <img className="product--image" src={url} alt={name} />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>
        {/* Display shortDescription in the slider, full description on detail page */}
        {props.location?.pathname === '/detail' ? (
          <p>{description}</p>
        ) : (
          <p>{shortDescription}</p>
        )}
      </p>
      <p>
        <Link
          to="/detail"
          className="linked"
          state={{ productData: { name, url, price, description,headingone,headingtwo,headingthree,headingfour,headingfive,headingsix,headingseven,headingeight,headingnine } }}
        >
          <button>Explore</button>
        </Link>
      </p>
    </div>
  );
}