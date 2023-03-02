import React from 'react'

import { BsArrowRight } from 'react-icons/bs'
import { Footer } from '../../components'
import './footers.css'

const Footers = () => {
  return (
    <div id='being' className='instrument__footers'>
      <div className='instrument__footers-info'>
        <h2 className='instrument__footers-heading'>We'd love to work with you and <br /> your team</h2>
        <button type='button' className='instrument__btn'>Get in toch {<BsArrowRight size={12}/>}</button>
      </div>
      <div className='instrumwnt__footers-links'>
        <Footer />
      </div>
    </div>
  )
}

export default Footers
