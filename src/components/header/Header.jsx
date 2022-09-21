import React from 'react'
import './header.scss'
import CTA from './CTA'
import Me from '../../assets/MauPerfil.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Mauricio Mejía</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img id='porfileImg' src={Me} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header