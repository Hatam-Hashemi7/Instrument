import React from 'react'

import Article from '../../components/article/Article'
import dropbox from '../../assets/dropbox.webp'
import emas from '../../assets/emas.webp'
import { BsArrowRight } from 'react-icons/bs'
import './carrers.css'

const Carrers = () => {
  return (
    <div id='carrers' className='instrument__carrers'>
      <div className='instrument__carrers-explore'>
        <h2 className='instrument__carrers-heading'>Explore some of our most <br />recent work</h2>
        <button className='instrument__btn'>Our work {<BsArrowRight size={12}/>}</button>
      </div>
      <div className='instrument__carrers-article'>
        <Article imgUrl={emas} title='Emas Institute' text="Ray and Charles Emas laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses' timeless methodologies to a modern audience,v the Emas Institute enlisted instrument to co-create a digital platform to unveil their vast collection to the world." />
        <Article imgUrl={dropbox} title='Dropbox "For All Things Worth Saving"' text="To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' - an ecosystem of branded experience aimed to remind people of the inherent value of their digtal files." />
      </div>
    </div>
  )
}

export default Carrers
