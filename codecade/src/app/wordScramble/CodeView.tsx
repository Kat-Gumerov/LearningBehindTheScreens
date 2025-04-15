import React, { useState } from 'react'
import { getExplanation } from '../../../utils/api'

interface CodeViewProps {
  currentLine: number
  code: string[]
  onUserClick: (index: number) => Promise<void>
}

const CodeView = ({ currentLine, code, onUserClick }: CodeViewProps) => {
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const codeLines = code.map((line, index) => {
    return (
      <div key={index} className='flex items-center gap-2 my-1'>
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
      <div className='codeview'>{codeLines}</div>
    </div>
  )
}

export default CodeView
