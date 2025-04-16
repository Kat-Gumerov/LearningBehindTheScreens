'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <Nav>
      <Link href='/' legacyBehavior passHref>
        <NavLink className={pathname === '/' ? 'active' : ''}>
          <img src='/images/Icon.png' className='h-32'></img>
          {/* <h1 id='logo-text'>CodeCade</h1> */}
        </NavLink>
      </Link>

      <Bars />

      <NavMenu>
        <Link href='/' legacyBehavior passHref>
          <NavLink className={pathname === '/' ? 'active' : ''}>home</NavLink>
        </Link>
        <Link href='/about' legacyBehavior passHref>
          <NavLink className={pathname === '/about' ? 'active' : ''}>
            about
          </NavLink>
        </Link>
        <Link href='/Contact' legacyBehavior passHref>
          <NavLink className={pathname === '/Contact' ? 'active' : ''}>
            contact
          </NavLink>
        </Link>
        <Link href='/play' legacyBehavior passHref>
          <NavBtnLink className={pathname === '/play' ? 'active' : ''}>
            PLAY
          </NavBtnLink>
        </Link>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
