import React, { useState } from 'react'
import { getExplanation } from '../../../utils/api'

interface CodeViewProps {
  currentLine: number
}

const CodeView = ({ currentLine }: CodeViewProps) => {
  const [explanation, setExplanation] = useState('') // The explanation from the AI model
  const [loading, setLoading] = useState(false) // To manage loading state
  const [error, setError] = useState<string | null>(null) // To manage any error

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

  const handleExplain = async (index: number) => {
    setLoading(true)
    setError(null)
    try {
      const result = await getExplanation(
        rock_paper_scissor_code[index],
        'rock paper scissors'
      ) // Get the explanation from the backend
      setExplanation(result) // Set the explanation state
    } catch (error) {
      setError('An error occurred while fetching the explanation.')
    } finally {
      setLoading(false) // End the loading state
    }
  }

  // Display code line by line from array
  let codeLines = rock_paper_scissor_code.map((line, index) => {
    return (
      <div key={index} className='flex'>
        <h3 className={index === currentLine ? 'bg-yellow-300 text-black' : ''}>
          {index}: {line}
        </h3>
        <button
          onClick={() => {
            handleExplain(index)
          }}
          disabled={loading}
        >
          {loading ? 'Explaining...' : ''}
          <img 
            src='images/challenge.png'
            alt="explain icon"
            className="w-6 h-6"
            //className="explain-icon"
          ></img>
        </button>
      </div>
    )
  })

  return (
    <div>
      <div className='codeview'>{codeLines}</div>

      <div>
        {error && <p className='text-red-600'>{error}</p>}
        {explanation && (
          <div className='mt-4'>
            <h2 className='text-lg font-bold'>Explanation:</h2>
            <p>{explanation}</p>
          </div>
        )}
      </div>


        
    </div>
  )
}

export default CodeView
