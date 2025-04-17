import React, { useState } from 'react'
import '../styles/dualscreen.css'

interface CodeViewProps {
  currentLine: number | null
  code: string[]
  onUserClick: (index: number) => Promise<void>
  completedLines: number[]
}

const CodeView = ({
  currentLine,
  code,
  onUserClick,
  completedLines,
}: CodeViewProps) => {
  const [explanation, setExplanation] = useState('') // The explanation from the AI model
  const [loading, setLoading] = useState(false) // To manage loading state
  const [error, setError] = useState<string | null>(null) // To manage any error

  // Display code line by line from array
  let codeLines = code.map((line, index) => {
    return (
      <div key={index} className='flex'>
        <h3
          className={
            index === currentLine
              ? 'bg-yellow-300 text-black'
              : completedLines.includes(index)
              ? 'text-green-500 font-bold'
              : ''
          }
        >
          {index}: {line}
        </h3>
        <button
          onClick={() => {
            onUserClick(index)
          }}
          disabled={loading}
        >
          {/* {loading ? 'Explaining...' : ''} */}
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
      <h1 className='font-bold instructions'>See the Code</h1>
      <div className='codeview'>{codeLines}</div>
    </div>
  )
}

export default CodeView
