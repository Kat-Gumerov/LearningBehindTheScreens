/* eslint-disable react/prop-types */
// import { useState } from 'react'
import './style.css'

const CodeView = ({ currentLine }) => {
  // const tic_tac_toe_code = [
  //   'def handle_move(position):',
  //   '    # Initialize the game board',
  //   '    if board[position] == "":',
  //   '        # Get the current player (X or O)',
  //   '        player = current_player',
  //   "        # Place the player's mark on the board",
  //   '        board[position] = player',
  //   '        # Check if there is a winner',
  //   '        winner = check_winner(board)',
  //   '        if winner:',
  //   "            # If there's a winner, end the game",
  //   '            return winner',
  //   '        # Switch to the other player',
  //   '        current_player = "O" if player == "X" else "X"',
  // ]

  const rock_paper_scissor_code = [
    'def play_round(player_choice):',
    '    # Define the possible choices',
    '    choices = ["rock", "paper", "scissors"]',
    '    # Generate a random choice for the computer',
    '    computer_choice = random.choice(choices)',
    '    # Determine the outcome of the game',
    '    if player_choice == computer_choice:',
    "        # If choices are the same, it's a tie",
    '        return "It\'s a tie!"',
    '    elif (player_choice == "rock" and computer_choice == "scissors") or ',
    '         (player_choice == "scissors" and computer_choice == "paper") or ',
    '         (player_choice == "paper" and computer_choice == "rock"):',
    "        # Player wins if they beat the computer's choice",
    '        return "You win!"',
    '    else:',
    '        # Otherwise, the computer wins',
    '        return "You lose!"',
  ]

  let codeLines = rock_paper_scissor_code.map((line, index) => {
    return (
      <h3 key={index} className={currentLine === index ? 'highlight' : ''}>
        {line}
      </h3>
    )
  })

  return (
    <div className='code-box'>
      <h1>Code View</h1>
      {codeLines}
    </div>
  )
}

export default CodeView
