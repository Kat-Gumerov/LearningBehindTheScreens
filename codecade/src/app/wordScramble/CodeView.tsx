import React, { useState } from 'react'
import { getExplanation } from '../../../utils/api'

interface CodeViewProps {
  currentLine: number
}

const CodeView = ({ currentLine }: CodeViewProps) => {
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const word_scramble_code = [
    'def scramble(original_word, scrambled_word):',
    '    while tries > 0:',
    '        guess = input(f"Guess the word: {scrambled_word}\\n")',
    '        if guess.lower() == original_word:',
    '            return "Correct!"',
    '        else:',
    '            tries -= 1',
    '            return "Wrong. {tries} tries left."',
    '    return "You lost! The word was {original_word}."',
  ]

  const handleExplain = async (index: number) => {
    setLoading(true)
    setError(null)
    try {
      const result = await getExplanation(
        word_scramble_code[index],
        'word scramble game'
      )
      setExplanation(result)
    } catch (error) {
      setError('An error occurred while fetching the explanation.')
    } finally {
      setLoading(false)
    }
  }

  const codeLines = word_scramble_code.map((line, index) => {
    return (
      <div key={index} className='flex items-center gap-2 my-1'>
        <h3 className={index === currentLine ? 'bg-yellow-300 text-black' : ''}>
          {index}: {line}
        </h3>
        <button onClick={() => handleExplain(index)} disabled={loading}>
          {loading ? 'Explaining...' : ''}
          <img
            src='images/challenge.png'
            alt='explain icon'
            className='w-7 h-7'
          ></img>
        </button>
      </div>
    )
  })

  return (
    <div>
      <div className='codeview'>{codeLines}</div>
    </div>
  )
}

export default CodeView
