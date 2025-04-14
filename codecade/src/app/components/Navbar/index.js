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

  console.log('Current pathname:', pathname)
  console.log('🔥 Navbar is active and current path is:', pathname)

  return (
    <Nav>
      <Link href='/' legacyBehavior passHref>
        <NavLink className={pathname === '/' ? 'active' : ''}>
          <h1 id='logo-text'>CodeCade</h1>
        </NavLink>
      </Link>

      <Bars />

      <NavMenu>
        <Link href='/home' legacyBehavior passHref>
          <NavLink className={pathname === '/home' ? 'active' : ''}>
            home
          </NavLink>
        </Link>
        <Link href='/about' legacyBehavior passHref>
          <NavLink className={pathname === '/about' ? 'active' : ''}>
            about
          </NavLink>
        </Link>
        <Link href='/contact' legacyBehavior passHref>
          <NavLink className={pathname === '/contact' ? 'active' : ''}>
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
