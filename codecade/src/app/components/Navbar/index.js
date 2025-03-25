'use client'
import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <h1>logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/home" activestyle>
                home
            </NavLink>
            <NavLink to="/about" activestyle>
                about
            </NavLink>
            <NavLink to="/contact" activestyle>
                contact
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/play'>PLAY</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  ) 
}

export default Navbar
