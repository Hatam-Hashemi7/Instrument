import React, { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './card.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = ({ imgUrl, text}) => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div className='instrument__card' data-aos="fade">
      <img className='instrument__card-img' src={imgUrl} alt="img" />
      <div className='instrument__card-container_info'>
        <p className='instrument__card-paragraph' data-aos="fade" >{text}</p>
        <button className='instrument__btn' data-aos="fade">Learn More  {<BsArrowRight size={12}/>}</button>
      </div>
    </div>
  )
}

export default Card
