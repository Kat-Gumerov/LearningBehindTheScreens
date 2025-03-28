'use client'
import React, { MouseEvent, use, useEffect } from 'react'
import { useState } from 'react'
import { text } from 'stream/consumers'

interface GameViewProps {
  onUserClick: (codeArray: number[]) => void
  buttonDisabled: boolean
}

const GameView = ({ onUserClick, buttonDisabled }: GameViewProps) => {
  const [numGuesses, setNumGuesses] = useState(0)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([])
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([])
  const [secretWord, setSecretWord] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [playerWon, setPlayerWon] = useState(false)

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

  const words = ['code', 'web', 'chip', 'byte', 'file']

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    setSecretWord(words[randomIndex])
  }, [])

  const onGuess = (e: MouseEvent<HTMLButtonElement>) => {
    const players_guess = (e.target as HTMLButtonElement).innerText

    if (secretWord.includes(players_guess)) {
      let newCorrectGuess = [...correctGuesses, players_guess]
      setCorrectGuesses(newCorrectGuess)
      if (newCorrectGuess.length == secretWord.length) {
        setPlayerWon(true)
      }
    } else {
      let newIncorrectGuess = [...incorrectGuesses, players_guess]
      setIncorrectGuesses(newIncorrectGuess)
      let addedGuess = numGuesses + 1
      // console.log(addedGuess, numGuesses)
      if (addedGuess <= 6) {
        setNumGuesses(addedGuess)
      } else {
        setGameOver(true)
      }
    }

    let newGuess = [...guessedLetters, players_guess]

    setGuessedLetters(newGuess)
  }

  const letterButtons = alphabet.map((letter, index) => (
    <button
      key={index}
      onClick={onGuess}
      disabled={guessedLetters.includes(letter) || gameOver || buttonDisabled}
      className={`border-2 border-solid border-black p-2 m-1 
        ${guessedLetters.includes(letter) ? 'bg-gray-200' : ''} ${
        incorrectGuesses.includes(letter) ? 'text-red-600' : 'text-black'
      }`}
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
    <pre key={index}>
      <h1 key={index}>{line}</h1>
      <br />
    </pre>
  ))

  const generateDisplayWord = secretWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ')

  return (
    <div className='border-4 border-solid border-black p-4 w-[500px] flex flex-col items-center '>
      <h1>{gameOver ? 'Game Over' : ''}</h1>
      <h1>{playerWon ? 'You Win!' : ''}</h1>
      <div className='justify-self-center'>{renderHangman}</div>
      <div>{generateDisplayWord}</div>
      <div>{letterButtons}</div>
    </div>
  )
}

export default GameView
