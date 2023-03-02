import React from 'react'
import intro from '../../assets/intro.mp4'

import './intro.css'

const Intro = () => {
  return (
    <div className='instrument__intro'>
        <video className='instrument__intro-video' src={intro} type="video/mp4" loop muted autoPlay></video>
    </div>
  )
}

export default Intro
