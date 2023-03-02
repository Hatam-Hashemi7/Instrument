import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './header.css'

const Header = () => {
  return (
    <div id='what' className='instrument__what'>
      <div className='instrument__what-container'>
        <h1 className='instument__what-container_heading'>
          Build.
          Grow.
          Serve.
        </h1>
        <p className='insturment__what-container_paragraph'>
          We are investing $3 milion over the next three years in our <br />
          Build|Grow|Serve program, created to support nad empower Black nad <br />
          underrepresented commmubities.
        </p>
        <div className='insturment__what-container_btn'>
          <button type='button' className='instrument__btn'>Learn More {<BsArrowRight size={12}/>}</button>
        </div>

      </div>
    </div>
  )
}

export default Header