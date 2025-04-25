'use client'

import React from 'react'
import Link from 'next/link'
import '../styles/navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='Nav'>
      <Link href='/' className='NavLink'>
        <img src='/images/Icon.png' className='h-32'></img>
      </Link>

      <FaBars className='Bars' />

      <section className='NavMenu'>
        <Link href='/' className='NavLink'>
          <p>home</p>
        </Link>
        <Link href='/about' className='NavLink'>
          <p>about</p>
        </Link>
        <Link href='/Contact' className='NavLink'>
          <p>contact</p>
        </Link>
        <Link href='/play' className='NavLink NavBtnLink'>
          <p>PLAY</p>
        </Link>
      </section>
    </div>
  )
}

export default Navbar
