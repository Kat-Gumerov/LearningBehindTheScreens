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

  // arrays of code lines and their orders based on each outcome of the game
  const correct_guess = [1, 2, 3, 4]
  const incorrect_guess = [1, 2, 3, 5, 6, 7]
  const lost_game = [1, 2, 3, 5, 6, 7, 8]

  useEffect(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    setOriginalWord(randomWord)
    setScrambledWord(scramble(randomWord))
  }, [])

  const scramble = (word: string): string => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')
  }

  const handleGuess = () => {
    if (userGuess.toUpperCase() === originalWord) {
      setResult('You guessed it right! 🎉')
      onUserClick(correct_guess) // example code array
    } else {
      const newTries = triesLeft - 1
      setTriesLeft(newTries)
      if (newTries === 0) {
        setResult(`You lost! The word was ${originalWord}.`)
        onUserClick(lost_game) // example code array
      } else {
        setResult(`Wrong guess. ${newTries} tries left.`)
        onUserClick(incorrect_guess)
      }
    }
    setUserGuess('')
  }

  return (
    <div className='gameview text-center'>
      <h1 className='text-xl font-bold'>Word Scramble Game</h1>
      <h2 className='text-2xl my-4'>Scrambled Word: {scrambledWord}</h2>

      <input
        type='text'
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className='border p-2 rounded text-black'
        disabled={triesLeft === 0 || result.includes('guessed')}
      />
      <button
        onClick={handleGuess}
        disabled={
          triesLeft === 0 || result.includes('guessed') || buttonDisabled
        }
        className='ml-2 px-4 py-2 bg-slate-50 rounded'
      >
        Guess
      </button>

      <h3 className='mt-4'>{result}</h3>
    </div>
  )
}

export default GameView
