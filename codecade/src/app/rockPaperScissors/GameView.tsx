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

  const options = ['ROCK', 'PAPER', 'SCISSOR']

  const gameLogic = (e: MouseEvent<HTMLButtonElement>) => {
    onUserClick(e)

    const players_choice = (e.target as HTMLButtonElement).innerText
    const comp_choice = options[Math.floor(Math.random() * options.length)]

    setPlayerChoice(players_choice)
    console.log(playerChoice)

    setCompChoice(comp_choice)
    console.log(compChoice)

    if (playerChoice === compChoice) {
      console.log("It's a tie!")
    } else if (
      (playerChoice === 'ROCK' && compChoice === 'SCISSOR') ||
      (playerChoice === 'SCISSORS' && compChoice === 'ROCK') ||
      (playerChoice === 'PAPER' && compChoice === 'ROCK')
    ) {
      console.log('You win!')
    } else {
      console.log('You lose!')
    }
  }

  // Display each options
  let userChoices = options.map((option, index) => {
    return (
      <button
        key={index}
        className={`border-2 border-solid border-black p-2`}
        onClick={gameLogic}
      >
        {option}
      </button>
    )
  })

  return (
    <div className='border-4 border-solid border-black p-4 w-96'>
      <h2>Choose One:</h2>
      <div className='flex justify-around'>{userChoices}</div>
    </div>
  )
}

export default GameView
