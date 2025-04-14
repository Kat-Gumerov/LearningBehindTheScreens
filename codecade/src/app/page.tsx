'use client'

import Link from 'next/link'
import './styles/home.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* game menu */}
      <div className="text-center">
        <h1 id="select-title">SELECT GAME</h1>
        <br />
        <ul className="game-select-list space-y-2">
          <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">
            <Link href="/rockPaperScissors">Rock Paper Scissors</Link>
          </li>
          <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">
            <Link href="/hangman">Hangman</Link>
          </li>
          <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">
            <Link href="/wordScramble">Word Scramble</Link>
          </li>
        </ul>
        {/* <button className='start-button'>START</button> */}
      </div>
    </div>
  )
}
