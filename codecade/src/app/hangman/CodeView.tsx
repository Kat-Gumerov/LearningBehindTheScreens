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

  // Display code line by line from array
  let codeLines = code.map((line, index) => {
    return (
      <div key={index} className='flex items-center gap-2'>
        <h3 className={index === currentLine ? 'bg-yellow-300 text-black' : ''}>
          {index}: {line}
        </h3>
        <button onClick={() => onUserClick(index)} disabled={loading}>
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
      <div className='codeview w-1/2 flex flex-col justify-start items-start'>
        {codeLines}
      </div>
    </div>
  )
}

export default CodeView
