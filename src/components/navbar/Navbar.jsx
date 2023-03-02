import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='instrument__header'>
      <div className='instrument__header-logo'>
        <svg viewBox="0 0 100 17.5" width="100%" height="100%" role="presentation" aria-hidden="true" data-v-a5608aa8=""><title data-v-a5608aa8="">Instrument Website</title> <path classname="logo" fill="#121212" d="M43.6 11.6c0-1.2-.6-2.3-1.7-2.6 1.3-.4 1.7-1.3 1.7-2.7V3.7c0-2.2-1.1-3.4-3.4-3.4H36v16.9h2.2V9.8H40c1 0 1.4.6 1.4 1.6v2c0 1.9.1 2.9.3 3.8h2.4c-.4-1.2-.5-2.3-.5-3.8v-1.8zm-2.3-5.1c0 1-.5 1.6-1.4 1.6h-1.7V2.3h1.9c.9 0 1.2.5 1.2 1.4v2.8zM0 .3h2.2v16.9H0zM11.8 11.4l-1-2.6L7.5.3H5.6v16.9h2.1v-11l1 2.6 3.6 8.4h1.6V.3h-2.1zM20.7 0c-2.5 0-3.9 1.7-3.9 4 0 2.2 1.6 4.1 3.2 5.5 1.4 1.2 2.3 2.4 2.3 4.2 0 1.2-.6 1.9-1.8 1.9-1.3 0-1.8-.9-1.8-2.2V12h-2.2v1.6c0 2.2 1.6 3.8 4 3.8 2.2 0 4-1.5 4-4.1 0-2.2-1.2-3.8-2.9-5.3C20.1 6.6 19 5.6 19 3.6c0-1 .6-1.7 1.7-1.7 1.2 0 1.8.9 1.8 2.1v1.4h2.1V3.8C24.4 1.6 23 0 20.7 0zM26 2.3h2.9v14.9H31V2.3h2.9v-2H26zM52.5 13.7c0 1.2-.6 1.9-1.8 1.9s-1.8-.7-1.8-1.9V.3h-2.2v13.3c0 2.4 1.7 3.9 4 3.9s4-1.5 4-3.9V.3h-2.2v13.4zM64.1 10.8l-.5 2.8-.5-2.8L61.2.3h-3.1v16.9h2V4.7l.5 2.6 1.9 9.9h2.1l1.9-9.9.5-2.6v12.5h2V.3h-3zM72.4 17.2h6.7v-2h-4.5V9.4h3.5V7.5h-3.5V2.3h4.5v-2h-6.7zM88 11.4l-1-2.6L83.7.3h-1.8v16.9h2v-11L85 8.8l3.5 8.4h1.6V.3H88zM92.2.3v2H95v14.9h2.2V2.3h2.8v-2z" data-v-a5608aa8=""></path></svg>
      </div>
      <div className='instrument__header-link-menu-lg'>
        <p><a href='#what'>WHAT WE DO</a></p>
        <p><a href='#who'>WHO WE ARE</a></p>
        <p><a href='#being'>BEING HERE</a></p>
        <p><a href='#carrers'>CARRERS</a></p>  
      </div>
      <div className='instrument-header-icon'>            
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='instrument__header-link-menu-sm'>
           <RiCloseLine color='#fff' size={32} onClick={() => setToggleMenu(false)}/>
            <div className='instrument__header-link-menu-sm-container'>
              <div className='instrument__header-link-menu-sm-container-item'>
                <p><a href='#what' onClick={() => setToggleMenu(false)}>WHAT WE DO</a></p>
                <p><a href='#who' onClick={() => setToggleMenu(false)}>WHO WE ARE</a></p>
                <p><a href='#being' onClick={() => setToggleMenu(false)}>BEING HERE</a></p>
                <p><a href='#carrers' onClick={() => setToggleMenu(false)}>CARRERS</a></p>  
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
