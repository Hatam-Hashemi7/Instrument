import React, { useEffect } from 'react'
import intro from '../../assets/intro.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './intro.css'

const Intro = () => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div className='instrument__intro'>
        <video className='instrument__intro-video' data-aos="fade" src={intro} type="video/mp4" loop muted autoPlay></video>
    </div>
  )
}

export default Intro
