import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './card.css'

const Card = ({ imgUrl, text}) => {
  return (
    <div className='instrument__card'>
      <img className='instrument__card-img' src={imgUrl} alt="img" />
      <div className='instrument__card-container_info'>
        <p className='instrument__card-paragraph'>{text}</p>
        <button className='instrument__btn'>Learn More  {<BsArrowRight size={12}/>}</button>
      </div>
    </div>
  )
}

export default Card
