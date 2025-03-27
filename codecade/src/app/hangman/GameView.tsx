'use client'
import React, { MouseEvent } from 'react'
import { useState } from 'react'

interface GameViewProps {
  onUserClick: (codeArray: number[]) => void
  buttonDisabled: boolean
}

const GameView = ({ onUserClick, buttonDisabled }: GameViewProps) => {
  const [numGuesses, setNumGuesses] = useState(0)

  const hangmanParts = [
    {
      lines: [
        '  +---+',
        '  |   |',
        '      |',
        '      |',
        '      |',
        '=========',
      ],
    },
    {
      lines: [
        '  +---+',
        '  |   |',
        '  O   |',
        '      |',
        '      |',
        '=========',
      ],
    },
    {
      lines: [
        '  +---+',
        '  |   |',
        '  O   |',
        '  |   |',
        '      |',
        '=========',
      ],
    },
    {
      lines: [
        '  +---+',
        '  |   |',
        '  O   |',
        ' /|   |',
        '      |',
        '=========',
      ],
    },
    {
      lines: [
        '  +---+',
        '  |   |',
        '  O   |',
        ' /|\\  |',
        '      |',
        '=========',
      ],
    },
    {
      lines: [
        '  +---+',
        '  |   |',
        '  O   |',
        ' /|\\  |',
        ' /    |',
        '=========',
      ],
    },
    {
      lines: [
        '  +---+',
        '  |   |',
        '  O   |',
        ' /|\\  |',
        ' / \\  |',
        '=========',
      ],
    },
  ]

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const letterButtons = alphabet.map((letter) => (
    <button
      key={letter}
      // onClick={() => {
      //   onGuess(letter)
      // }}
      // disabled={guessedLetters.includes(letter) || gameOver || buttonDisabled}
      className={`border-2 border-solid border-black p-2 m-1 
        // guessedLetters.includes(letter) ? 'bg-gray-200' : ''}`}
    >
      {letter}
    </button>
  ))

  // arrays of code lines and their orders based on each outcome of the game
  const playerWinsRock = [0, 2, 4, 6, 9, 10]
  const playerWinsPaper = [0, 2, 4, 6, 9, 11, 13, 14]
  const playerWinsScissor = [0, 2, 4, 6, 9, 11, 12]
  const playerLoses = [0, 2, 4, 6, 9, 11, 13, 16]
  const playerTies = [0, 2, 4, 6, 7]

  /*
   * Accepts the button click event and sets the players choice, computer choice, the winner and
   *then calls the onUser click function with the specific scenario array to be displayed
   */

  const gameLogic = async (e: MouseEvent<HTMLButtonElement>) => {}

  // Display each option for player
  // let userChoices = options.map((option, index) => {
  //   return (
  //     <button
  //       key={index}
  //       className='border-2 border-solid border-black p-2'
  //       onClick={gameLogic}
  //       disabled={buttonDisabled}
  //     >
  //       {option}
  //     </button>
  //   )
  // })

  let renderHangman = hangmanParts[numGuesses].lines.map((line, index) => (
    <pre>
      <h1 key={index}>{line}</h1>
      <br />
    </pre>
  ))

  return (
    <div className='border-4 border-solid border-black p-4 w-[500px] flex flex-col items-center '>
      <div className='justify-self-center'>{renderHangman}</div>
      <div>{letterButtons}</div>
    </div>
  )
}

export default GameView
