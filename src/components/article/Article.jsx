import React from 'react'
import './article.css'

const Article = ({ imgUrl, title, text }) => {
  return (
    <div className='instrument__article'>
      <img className='instrument__article-img' src={imgUrl} alt="article" />
      <div className='instrument__article-container'>
        <h3 className='instrument__article-heading'>{title}</h3>
        <p className='instrument__article-paragraph'>{text}</p>
      </div>
    </div>
  )
}

export default Article
