'use client'
import React from 'react'
import { useState } from 'react'
import CodeView from './CodeView'
import GameView from './GameView'

const page = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleUserClick = async () => {
    setButtonDisabled(true)

    setCurrentLine(2)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(4)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(9)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(11)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(13)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(13)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(0)

    setButtonDisabled(false)
  }
  return (
    <div className='flex justify-around'>
      <GameView
        onUserClick={() => handleUserClick()}
        buttonDisabled={buttonDisabled}
      ></GameView>
      <CodeView currentLine={currentLine}></CodeView>
    </div>
  )
}

export default page
