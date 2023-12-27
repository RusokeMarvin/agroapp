import React from 'react'
import './Detail.css'

function Detailpro(props) {
  return (
    <div className="cardpro">
    <img className="product--image" src={props.url} alt="product image" />
    <h2>{props.name}</h2>
    <p className="price">{props.price}</p>
    <p>{props.description}</p>
  </div>
  )
}

export default Detailpro