'use client'
import Link from 'next/link'
import './styles/home.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';
// import { Pixelify_Sans } from 'next/font/google'; //pixel font

// const pixelify = Pixelify_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    // <div className={pixelify.className}>
    <div>
      <Router>
        <Navbar />
      </Router>
      {/*game menu*/}
      <div className='text-center'>
        <h1 className='title'>GAME SELECT</h1>
        <br />
        <ul className='game-select-list space-y-2'>
          <Link href='/rockPaperScissors'>
            <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">Rock Paper Scissors</li>
          </Link>
          <Link href='/rockPaperScissors'>
            <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">Hangman</li>
          </Link>
          <Link href='/rockPaperScissors'>
            <li className="game group transition-transform duration-200 ease-in-out transform hover:scale-110 p-2 rounded-lg">Word Scramble</li>
          </Link>
        </ul>
        <button className='start-button'>START</button>
      </div>
    </div> 
  )
}
