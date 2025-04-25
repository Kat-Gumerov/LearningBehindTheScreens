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
        >
          <img
            src='images/challenge.png'
            alt='explain icon'
            className='w-6 h-6'
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
