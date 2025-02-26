'use client'
import React from 'react'
import { useState } from 'react'
import CodeView from './CodeView'
import GameView from './GameView'

const page = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [codeSpeed, setCodeSpeed] = useState(1000)

  const handleUserClick = async () => {
    setButtonDisabled(true)

    setCurrentLine(2)
    await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(4)
    await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(9)
    await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(11)
    await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(13)
    await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(13)
    await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(0)

    setButtonDisabled(false)
  }

  const speedUp = () => {
    setCodeSpeed((prevSpeed) => Math.max(200, prevSpeed - 200))
  }

  const slowDown = () => {
    setCodeSpeed((prevSpeed) => prevSpeed + 200)
  }

  return (
    <div>
      <h1>Code Speed : {codeSpeed / 1000}s</h1>
      <button
        onClick={speedUp}
        className='border-2 border-solid border-black p-2'
      >
        Speed Up
      </button>
      <button
        onClick={slowDown}
        className='border-2 border-solid border-black p-2'
      >
        Slow Down
      </button>
      <div className='flex justify-around'>
        <GameView
          onUserClick={() => handleUserClick()}
          buttonDisabled={buttonDisabled}
        ></GameView>
        <CodeView currentLine={currentLine}></CodeView>
      </div>
    </div>
  )
}

export default page
