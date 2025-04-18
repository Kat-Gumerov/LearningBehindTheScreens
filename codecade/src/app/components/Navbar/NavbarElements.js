'use client'
import styled from 'styled-components'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: #fdc066;
  font-size: 26px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  font-family: Dogica;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  #logo-text {
    color: white;
    pointer-events: none;
  }

  &:hover {
    transition: all 0.2 ease-in-out;
    color: #1d268c;
    text-decoration: underline;
  }

  &.active {
    color: #1d268c;
  }
`

export const Bars = styled(FaBars)`
    display: none;
    colors: #FDC066;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size; 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #57bee7;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`
