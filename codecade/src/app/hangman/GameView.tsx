'use client'
import React, { MouseEvent, useEffect, useState } from 'react'

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
        onUserClick(playerWins)
      }
      onUserClick(playerGuessCorrect)
    } else {
      let newIncorrectGuess = [...incorrectGuesses, players_guess]
      setIncorrectGuesses(newIncorrectGuess)
      let addedGuess = numGuesses + 1
      if (addedGuess <= 6) {
        setNumGuesses(addedGuess)
        onUserClick(playerGuessIncorrect)
      } else {
        setGameOver(true)
        onUserClick(playerLoses)
      }
    }

    let newGuess = [...guessedLetters, players_guess]
    setGuessedLetters(newGuess)
  }

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length)
    setSecretWord(words[randomIndex])
    setGuessedLetters([])
    setIncorrectGuesses([])
    setCorrectGuesses([])
    setNumGuesses(0)
    setGameOver(false)
    setPlayerWon(false)
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

  const playerGuessCorrect = [1, 2, 3, 7, 8, 9]
  const playerGuessIncorrect = [1, 2, 3, 7, 10, 11]
  const playerWins = [1, 2, 3, 4, 5, 6]
  const playerLoses = [1, 12, 13, 14]

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
    <div>
      <h1 className='font-bold instructions'>Play The Game</h1>
      <div className='gameview'>
        <h1>
          {gameOver ? (
            <>
              Game Over <br /> The word was {secretWord}
            </>
          ) : (
            ''
          )}
        </h1>
        <h1>{playerWon ? 'You Win!' : ''}</h1>
        {(gameOver || playerWon) && (
          <button
            onClick={resetGame}
            className='mt-4 px-4 py-2 bg-green-200 hover:bg-green-300 rounded'
          >
            Play Again
          </button>
        )}
        <div className='justify-items-center'>{renderHangman}</div>
        <div>{generateDisplayWord}</div>
        <div>{letterButtons}</div>
      </div>
    </div>
  )
}

export default GameView
