import React from 'react'
import './Detail.css'

function Detailpro(props) {
  return (
    <div className="cardpro">
    <img className="product--image" src={props.url} alt="product image" />
    <h2>{props.name}</h2>
    <h2>{props.headingone}</h2>
    <h2>{props.headingtwo}</h2>
    <h2>{props.headingthree}</h2>
    <h2>{props.headingfour}</h2>
    <h2>{props.headingfive}</h2>
    <h2>{props.headingsix}</h2>
    <h2>{props.headingseven}</h2>
    <h2>{props.headingeight}</h2>
    <h2>{props.headingnine}</h2>
    <p className="price">{props.price}</p>
    <p>{props.description}</p>
  </div>
  )
}

export default Detailpro