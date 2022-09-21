import React, { useState } from 'react'
import './nav.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import  { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import  { RiServiceLine } from 'react-icons/ri'


function Nav() {
  const [activeMenu, setActiveMenu] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveMenu('#')} className={activeMenu === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveMenu('#about')} className={activeMenu === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience'  onClick={() => setActiveMenu('#experience')} className={activeMenu === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#services' onClick={() => setActiveMenu('#services')} className={activeMenu === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveMenu('#contact')} className={activeMenu === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav