import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Card.css'


function Card({name,description,price,picture}) {


  return (
    <div className='Card'>
      <LazyLoadImage src={require(`../../Assets/figuresImgs/${picture}`)}  effect='blur' className='cardImg' alt='cardImg' />
      <div className='itemDetail' >
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Rs: {price}</span>
      </div>
    </div>
  )
}

export default Card
