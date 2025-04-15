'use client'

import Link from 'next/link'
import '../styles/home.css'
import Navbar from '../components/Navbar'
import codey from '../../../public/images/codey-pic.png'

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* game menu */}
      <div className='text-center'>
        {/* <img src={codey.src} className='mr-5 codey'></img> */}
        <div>
          <h1 id='select-title'>SELECT GAME</h1>
          <br />
          <ul className='game-select-list space-y-2'>
            <li className='game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg'>
              <Link href='/rockPaperScissors'>Rock Paper Scissors</Link>
            </li>
            <li className='game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg'>
              <Link href='/hangman'>Hangman</Link>
            </li>
            <li className='game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg'>
              <Link href='/wordScramble'>Word Scramble</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
