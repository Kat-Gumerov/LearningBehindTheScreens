'use client'
import React, { useState, useEffect } from 'react'

interface GameViewProps {
  onUserClick: (codeArray: number[]) => void
  buttonDisabled: boolean
}

const GameView = ({ onUserClick, buttonDisabled }: GameViewProps) => {
  const wordList = ['REACT', 'JAVASCRIPT', 'PROGRAM', 'COMPILER', 'DEBUG']
  const [originalWord, setOriginalWord] = useState('')
  const [scrambledWord, setScrambledWord] = useState('')
  const [userGuess, setUserGuess] = useState('')
  const [triesLeft, setTriesLeft] = useState(3)
  const [result, setResult] = useState('')

  const correct_guess = [1, 2, 3, 4]
  const incorrect_guess = [1, 2, 3, 5, 6, 7]
  const lost_game = [1, 2, 3, 5, 6, 7, 8]

  const scramble = (word: string): string => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')
  }

  const startNewGame = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    setOriginalWord(randomWord)
    setScrambledWord(scramble(randomWord))
    setUserGuess('')
    setTriesLeft(3)
    setResult('')
  }

  useEffect(() => {
    startNewGame()
  }, [])

  const handleGuess = () => {
    if (userGuess.toUpperCase() === originalWord) {
      setResult('You guessed it right! 🎉')
      onUserClick(correct_guess)
    } else {
      const newTries = triesLeft - 1
      setTriesLeft(newTries)
      if (newTries === 0) {
        setResult(`You lost! The word was ${originalWord}.`)
        onUserClick(lost_game)
      } else {
        setResult(`Wrong guess. ${newTries} tries left.`)
        onUserClick(incorrect_guess)
      }
    }
    setUserGuess('')
  }

  const gameOver = triesLeft === 0 || result.includes('guessed')

  return (
    <div className='gameview text-center'>
      <h1 className='text-s text-blue-700 mt-5 mb-5'>
        Try to unscramble the word below and type your guess in the box!
      </h1>
      <h2 className='text-2xl my-4 text-emerald-500'>
        Scrambled Word: {scrambledWord}
      </h2>

      <input
        type='text'
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className='border p-2 rounded text-black'
        disabled={gameOver}
      />
      <button
        onClick={handleGuess}
        disabled={gameOver || buttonDisabled}
        className='ml-2 px-4 py-2 bg-slate-50 rounded'
      >
        Guess
      </button>

      <h3 className='mt-4'>{result}</h3>

      {gameOver && (
        <button
          onClick={startNewGame}
          className='mt-4 px-4 py-2 bg-emerald-400 rounded'
        >
          Play Again
        </button>
      )}
    </div>
  )
}

export default GameView
