import React, { useState } from 'react'
import { getExplanation } from '../../../utils/api'

interface CodeViewProps {
  currentLine: number
}

const CodeView = ({ currentLine }: CodeViewProps) => {

  const [explanation, setExplanation] = useState('') // The explanation from the AI model
  const [loading, setLoading] = useState(false) // To manage loading state
  const [error, setError] = useState<string | null>(null) // To manage any error
  
  const hangman_code = [
    'def play_round(guess, random_word):',
    'word = random_word',
    '# Now, we need to show the player how many letters are in the word.',
    "# We'll use underscores to represent the hidden letters.",
    'guessed_letters = ["_"] * len(word)',
    'print(" ".join(guessed_letters))',
    "# We'll give the player 6 tries to guess the word.",
    'tries = 6',
    "# Now, we'll start the game loop.",
    'while tries > 0 and "_" in guessed_letters:',
    '    # Check if the letter is in the word.',
    '    if guess in word:',
    '        # If it is, replace the underscores with the guessed letter.',
    '        for i in range(len(word)):',
    '            if word[i] == guess:',
    '                guessed_letters[i] = guess',
    '    else:',
    "        # If it's not, take away a try.",
    '        tries -= 1',
    '# Check if the player won or lost.',
    'if "_" not in guessed_letters:',
    '    print("You win!")',
    'else:',
    '    printf("Game Over")',
  ]

  // Display code line by line from array
  let codeLines = hangman_code.map((line, index) => {
    return (
      <h3 key={index} className={index === currentLine ? 'bg-yellow-300 text-black' : ''}>
        {index}: {line}
      </h3>
    )
  })

  const handleExplain = async (index: number) => {
      setLoading(true)
      setError(null)
      try {
        const result = await getExplanation(
          hangman_code[index],
          'rock paper scissors'
        ) // Get the explanation from the backend
        setExplanation(result) // Set the explanation state
      } catch (error) {
        setError('An error occurred while fetching the explanation.')
      } finally {
        setLoading(false) // End the loading state
      }
    }

  return (
    <div>
      <div className='codeview'>{codeLines}</div>

      <div className='ai-container'>
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
