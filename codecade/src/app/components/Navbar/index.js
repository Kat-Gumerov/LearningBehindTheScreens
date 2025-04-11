'use client'
import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1 id='logo-text'>CodeCade</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activestyle='true'>
            home
          </NavLink>
          <NavLink to='/about' activestyle='true'>
            about
          </NavLink>
          <NavLink to='/contact' activestyle='true'>
            contact
          </NavLink>
          <NavBtnLink to='/play'>PLAY</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
