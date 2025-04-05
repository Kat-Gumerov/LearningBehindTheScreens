'use client'
import React, { MouseEvent } from 'react'
import { useState } from 'react'
import rockImg from '/images/rock.png';
import paperImg from '/images/paper.png';
import scissorImg from '/images/scissors.png';

interface GameViewProps {
  onUserClick: (codeArray: number[]) => void
  buttonDisabled: boolean
}

const GameView = ({ onUserClick, buttonDisabled }: GameViewProps) => {
  const [playerChoice, setPlayerChoice] = useState('')
  const [compChoice, setCompChoice] = useState('')
  const [playerWins, setPlayerWins] = useState(false)
  const [compWins, setCompWins] = useState(false)

  const options = ['ROCK', 'PAPER', 'SCISSOR']
  // type Option = typeof options[number]; // "ROCK" | "PAPER" | "SCISSOR"

  // const imageMap: Record<Option, string> = {
  //   ROCK: '/images/rock.png',
  //   PAPER: '/images/paper.png',
  //   SCISSOR: '/images/scissors.png'
  // };

  // const options = [
  //   <img src="/images/rock.png" alt="Rock" width="100" height="17"/>,
  //   <img src="/images/paper.png" alt="Paper" width="100" height="17"/>,
  //   <img src="/images/scissors.png" alt="Scissors" width="100" height="17"/>,
  // ]

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

  const gameLogic = async (e: MouseEvent<HTMLButtonElement>) => {
    const players_choice = (e.target as HTMLButtonElement).innerText
    const comp_choice = options[Math.floor(Math.random() * options.length)]

    setPlayerChoice(players_choice)

    setCompChoice(comp_choice)

    if (players_choice === comp_choice) {
      onUserClick(playerTies)
      setPlayerWins(false)
      setCompWins(false)
    } else if (players_choice === 'ROCK' && comp_choice === 'SCISSOR') {
      onUserClick(playerWinsRock)
      setPlayerWins(true)
      setCompWins(false)
    } else if (players_choice === 'SCISSOR' && comp_choice === 'PAPER') {
      onUserClick(playerWinsScissor)
      setPlayerWins(true)
      setCompWins(false)
    } else if (players_choice === 'PAPER' && comp_choice === 'ROCK') {
      onUserClick(playerWinsPaper)
      setPlayerWins(true)
      setCompWins(false)
    } else {
      onUserClick(playerLoses)
      setPlayerWins(false)
      setCompWins(true)
    }
  }

  // Display each option for player
let userChoices = options.map((option, index) => {
  return (
    <button
      key={index}
      onClick={gameLogic}
      disabled={buttonDisabled}
    >
      {/* <img 
        src={imageMap[option]} 
        alt={option.toLowerCase()} 
        width="100"
        height="100"
      /> */}
      {option}
    </button>
  )
})

  return (
    <div className='gameview'>
      <div className='game_states flex justify-around'>
        {/* color winner text in green */}
        <h1 className={playerWins ? 'text-green-700' : ''}>
          Your Choice: {playerChoice}
        </h1>
        
        <h1 className={compWins ? 'text-green-700' : ''}>
          Computer's Choice: {compChoice}
        </h1>
      </div>
      <h1 className='gameview-text'>
        {/* 'Display game results' */}
        {playerChoice && playerChoice === compChoice ? "It's a tie!" : ''}
        {playerWins && !compWins ? 'You win!' : ''}
        {!playerWins && compWins ? 'You lose!' : ''}
      </h1>
      {/* Display player options */}
      <h2 className='gameview-text'>Choose One:</h2>
      <div className='flex justify-around'>{userChoices}</div>
    </div>
  )
}

export default GameView
