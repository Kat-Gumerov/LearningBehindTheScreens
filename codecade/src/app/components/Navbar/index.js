'use client'
import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <h1 id='logo-text'>CodeCade</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/home" activeStyle>
                home
            </NavLink>
            <NavLink to="/about" activesStyle>
                about
            </NavLink>
            <NavLink to="/contact" activeStyle>
                contact
            </NavLink>
            <NavBtnLink to='/play'>PLAY</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  ) 
}

export default Navbar
