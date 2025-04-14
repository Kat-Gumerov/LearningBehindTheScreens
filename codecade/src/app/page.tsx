'use client'
import Link from 'next/link'
import Navbar from './components/Navbar'
import './styles/landing.css'

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className='flex-container justify-evenly mt-7 w-80 m-8 mb-8'>
        <div className='description mt-7 flex'>
          <h1 className='mt-20'>See the Code</h1>
          <h1>Play the Games</h1>
          <h1>Learn the Magic</h1>
        </div>

        <div className='mt-7'>
          <img
            src='../images/landing-photo.png'
            alt='Boy playing video games'
            className='mt-9'
          ></img>
        </div>
      </div>

      <div className='text-center mb-3'>
        <Link href='play'>
          <button className='start-button'>Get Started</button>
        </Link>
      </div>

      <div className='game-display'>
        <h1 className='text-center' id='regFont'>
          Learn the logic of code by playing classic games!
        </h1>

        <div className='gameboxes'>
          <div id='box1'>
            <img
              src='../images/pencil.png'
              alt='pencil'
              className='size-20 ml-5'
            ></img>
            <p className='gamename'>Word Scramble</p>
          </div>

          <div id='box2'>
            <img src='../images/man.png' alt='man' className='size-20'></img>
            <p>Hangman</p>
          </div>

          <div id='box3'>
            <img
              src='../images/scissors.png'
              alt='scissors'
              className='size-20'
            ></img>
            <p>Rock Paper Scissors</p>
          </div>
        </div>
      </div>
    </div>
  )
}
