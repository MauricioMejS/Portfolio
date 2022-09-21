import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiFrontendmentor } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mauriciomejiasanchez/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/MauricioMejS' target='_blank'><BsGithub /></a>
        <a href='https://www.frontendmentor.io/profile/MauricioMejS' target='_blank'><SiFrontendmentor /></a>
    </div>
  )
}

export default HeaderSocial