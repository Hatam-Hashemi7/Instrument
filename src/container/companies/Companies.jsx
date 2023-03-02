import React from 'react'

import netflix from '../../assets/netflix.webp'
import spotify from '../../assets/spotify.webp'
import dropboxlogo from '../../assets/dropboxlogo.webp'
import './companies.css'

const Companies = () => {
  return (
    <div className='instrument__companies'>
      <div className='instrument__companies-container'>
        <img src={dropboxlogo} alt="dropbox" />
        <img src={netflix} alt="netflix" />
        <img src={spotify} alt="spotify" />
      </div>
    </div>
  )
}

export default Companies
