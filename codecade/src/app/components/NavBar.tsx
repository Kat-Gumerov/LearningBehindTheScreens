'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../styles/navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'
  const isContactPage = pathname === '/Contact'
  const isPlayPage = pathname === '/play'

  return (
    <div className='Nav'>
      <Link href='/' className='NavLink'>
        <img src='/images/Icon.png' className='h-32'></img>
      </Link>

      <FaBars className='Bars' />

      <section className='NavMenu'>
        <Link href='/' className={`NavLink ${isHomePage ? 'active' : ''}`}>
          <p>home</p>
        </Link>
        <Link
          href='/about'
          className={`NavLink ${isAboutPage ? 'active' : ''}`}
        >
          <p>about</p>
        </Link>
        <Link
          href='/Contact'
          className={`NavLink ${isContactPage ? 'active' : ''}`}
        >
          <p>contact</p>
        </Link>
        <Link
          href='/play'
          className={`NavLink NavBtnLink ${isPlayPage ? 'active' : ''}`}
        >
          <p>PLAY</p>
        </Link>
      </section>
    </div>
  )
}

export default Navbar
