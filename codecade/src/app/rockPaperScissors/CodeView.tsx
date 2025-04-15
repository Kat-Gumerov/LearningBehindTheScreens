import React, { useState } from 'react'
import { getExplanation } from '../../../utils/api'

interface CodeViewProps {
  currentLine: number
  code: string[]
  onUserClick: (index: number) => Promise<void>
}

const CodeView = ({ currentLine, code, onUserClick }: CodeViewProps) => {
  const [explanation, setExplanation] = useState('') // The explanation from the AI model
  const [loading, setLoading] = useState(false) // To manage loading state
  const [error, setError] = useState<string | null>(null) // To manage any error

  const handleExplain = async (index: number) => {
    setLoading(true)
    setError(null)
    try {
      const result = await getExplanation(code[index], 'rock paper scissors') // Get the explanation from the backend
      setExplanation(result) // Set the explanation state
    } catch (error) {
      setError('An error occurred while fetching the explanation.')
    } finally {
      setLoading(false) // End the loading state
    }
  }

  // Display code line by line from array
  let codeLines = code.map((line, index) => {
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
            alt='explain icon'
            className='w-6 h-6'
            //className="explain-icon"
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
