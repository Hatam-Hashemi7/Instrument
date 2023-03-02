import React from 'react'
import { Card } from '../../components'
import prize from '../../assets/prize.webp'
import instrument from '../../assets/instrument.webp'
import companie from '../../assets/companie.webp'

import './who.css'

const Who = () => {
  return (
    <div id='who' className='instrument__who'>
      <h2 className='instrument__who-heading'>
        We build connected brand <br /> 
        systems from vision through <br />
        execution
      </h2>
      <div>
        <Card imgUrl={instrument} text="As part of our Build. Grow. Serve. program, we’re investing over $1 million of pro bono work to nonprofit organizations that support and empower Black and systemically excluded communities." />
        <div >
          <Card className='row_reverse' imgUrl={prize} text="We’re proud to be recognized as a Best Workplace for Women Innovators by Fast Company"/>
        </div >
        <Card className='card-flex' imgUrl={companie} text="As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications." />
      </div>
    </div>
  )
}

export default Who
