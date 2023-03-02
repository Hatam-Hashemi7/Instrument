import React, { useEffect } from 'react'
import './article.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Article = ({ imgUrl, title, text }) => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div className='instrument__article' data-aos="fade">
      <img className='instrument__article-img' src={imgUrl} alt="article" />
      <div className='instrument__article-container'>
        <h3 className='instrument__article-heading' data-aos="fade">{title}</h3>
        <p className='instrument__article-paragraph' data-aos="fade">{text}</p>
      </div>
    </div>
  )
}

export default Article
