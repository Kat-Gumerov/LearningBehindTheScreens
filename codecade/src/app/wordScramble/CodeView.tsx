import React, { useState } from 'react'
import { getExplanation } from '../../../utils/api'

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
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const codeLines = code.map((line, index) => {
    return (
      <div key={index} className='flex items-center gap-2 my-1'>
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
        <button onClick={() => onUserClick(index)} disabled={loading}>
          {/* {loading ? 'Explaining...' : ''} */}
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
      <h1 className='font-bold instructions'>See the Code</h1>
      <div className='codeview'>{codeLines}</div>
    </div>
  )
}

export default CodeView
