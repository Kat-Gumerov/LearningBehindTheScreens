'use client'
import Link from 'next/link'
import Navbar from './components/Navbar'
import './styles/landing.css'

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className='flex-container'>
        <div className='description'>
          <h1>See the Code</h1>
          <h1>Play the Games</h1>
          <h1>Learn the Magic</h1>
        </div>

        <img
          src='../images/landing-photo.png'
          alt='Boy playing video games'
        ></img>
      </div>

      <div className='text-center'>
        <button className='start-button'>Get Started</button>
      </div>

      {/* <div className='text-center'>
        <button className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 
        bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 
        before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white 
        before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
            <span relative="relative z-10">Get Started</span>
        </button>
        </div> */}

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
