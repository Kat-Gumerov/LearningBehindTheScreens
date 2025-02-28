'use client'
import React, { MouseEvent } from 'react'
import { useState } from 'react'

interface GameViewProps {
  /** Function to handle the user's click */
  onUserClick: (event: MouseEvent<HTMLButtonElement>) => void
  /** Whether the button can be interacted with */
  buttonDisabled: boolean
}

const GameView = ({ onUserClick, buttonDisabled }: GameViewProps) => {
  const [playerChoice, setPlayerChoice] = useState('')
  const [compChoice, setCompChoice] = useState('')
  const [playerWins, setPlayerWins] = useState(false)
  const [compWins, setCompWins] = useState(false)

  const options = ['ROCK', 'PAPER', 'SCISSOR']

  const gameLogic = (e: MouseEvent<HTMLButtonElement>) => {
    onUserClick(e)

    const players_choice = (e.target as HTMLButtonElement).innerText
    const comp_choice = options[Math.floor(Math.random() * options.length)]

    setPlayerChoice(players_choice)
    console.log(players_choice)

    setCompChoice(comp_choice)
    console.log(comp_choice)

    if (players_choice === comp_choice) {
      console.log("It's a tie!")
      setPlayerWins(false)
      setCompWins(false)
    } else if (
      (players_choice === 'ROCK' && comp_choice === 'SCISSOR') ||
      (players_choice === 'SCISSOR' && comp_choice === 'PAPER') ||
      (players_choice === 'PAPER' && comp_choice === 'ROCK')
    ) {
      console.log('You win!')
      setPlayerWins(true)
      setCompWins(false)
    } else {
      console.log('You lose!')
      setPlayerWins(false)
      setCompWins(true)
    }
  }

  // Display each option
  let userChoices = options.map((option, index) => {
    return (
      <button
        key={index}
        className='border-2 border-solid border-black p-2'
        onClick={gameLogic}
        disabled={buttonDisabled}
      >
        {option}
      </button>
    )
  })

  return (
    <div className='border-4 border-solid border-black p-4 w-[500px]'>
      <div className='game_states flex justify-around'>
        <h1 className={playerWins ? 'text-green-700' : ''}>
          Your Choice: {playerChoice}
        </h1>
        <h1 className={compWins ? 'text-green-700' : ''}>
          Computer's Choice: {compChoice}
        </h1>
      </div>
      <h1>
        {' '}
        {playerChoice && playerChoice === compChoice ? "It's a tie!" : ''}
        {playerWins && !compWins ? 'You win!' : ''}
        {!playerWins && compWins ? 'You lose!' : ''}
      </h1>
      <h2>Choose One:</h2>
      <div className='flex justify-around'>{userChoices}</div>
    </div>
  )
}

export default GameView
