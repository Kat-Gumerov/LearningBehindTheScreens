import React from 'react'

interface CodeViewProps {
  currentLine: number
}

const CodeView = ({ currentLine }: CodeViewProps) => {
  const rock_paper_scissor_code = [
    'def play_round(player_choice):',
    '    # Define the possible choices',
    '    choices = ["rock", "paper", "scissors"]',
    '    # Generate a random choice for the computer',
    '    computer_choice = random.choice(choices)',
    "    # Check if it's a tie",
    '    if player_choice == computer_choice:',
    '        return "It\'s a tie!"',
    '    # Check if the player wins',
    '    if (player_choice == "rock" and computer_choice == "scissors"):',
    '        return "You win!"',
    '    if (player_choice == "scissors" and computer_choice == "paper"):',
    '        return "You win!"',
    '    if (player_choice == "paper" and computer_choice == "rock"):',
    '        return "You win!"',
    '    # If none of the above, the computer wins',
    '    return "You lose!"',
  ]

  // Display code line by line from array
  let codeLines = rock_paper_scissor_code.map((line, index) => {
    return (
      <h3 key={index} className={index === currentLine ? 'bg-yellow-300 text-black' : ''}>
        {index}: {line}
      </h3>
    )
  })

  return (
    <div>
      <div className='codeview'>{codeLines}</div>
    </div>
  )
}

export default CodeView
