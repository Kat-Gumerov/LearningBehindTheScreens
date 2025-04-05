'use client'
import Link from 'next/link'
import './styles/home.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      {/*game menu*/}
      <div className='text-center'>
        <h1 id='select-title'>GAME SELECT</h1>
        <br />
        <ul className='game-select-list space-y-2'>
          <Link href='/rockPaperScissors'>
            <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">Rock Paper Scissors</li>
          </Link>
          <Link href='/hangman'>
            <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">Hangman</li>
          </Link>
          <Link href='/wordScramble'>
            <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">Word Scramble</li>
          </Link>
        </ul>
        {/* <button className='start-button'>START</button> */}
      </div>
    </div> 
  )
}
