'use client'
import '../styles/dualscreen.css'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import CodeView from './CodeView'
import GameView from './GameView'

const page = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [codeSpeed, setCodeSpeed] = useState(1000)

  /*
   * Accepts and array of code line numbers, disables the buttons in the game, and highlights code lines in order.
   */
  const handleUserClick = async (codeArray: number[]): Promise<void> => {
    setButtonDisabled(true)

    for (let i = 0; i < codeArray.length; i++) {
      setCurrentLine(codeArray[i])
      await new Promise((resolve) => setTimeout(resolve, codeSpeed))
    }

    // setCurrentLine(2)
    // await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    // setCurrentLine(4)
    // await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    // setCurrentLine(9)
    // await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    // setCurrentLine(11)
    // await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    // setCurrentLine(13)
    // await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    // setCurrentLine(13)
    // await new Promise((resolve) => setTimeout(resolve, codeSpeed))

    setCurrentLine(0)

    setButtonDisabled(false)
  }

  /* The following two functions change code replay speed */
  const speedUp = () => {
    setCodeSpeed((prevSpeed) => Math.max(200, prevSpeed - 200))
  }

  const slowDown = () => {
    setCodeSpeed((prevSpeed) => prevSpeed + 200)
  }

  return (
    <div>
      <div>
      {/* back button */}
      <Link href={'..'}>
        <button className='back-button'>
        <img src="/images/arrow.png" alt="Back" width="100" height="100"/>
        </button>
      </Link>
      </div>
      {/* title */}
      <div>
        <h1 className='title'>Hangman</h1>
      </div>

      {/* displaying Game View and Code View */}
      <div className='dualscreen-container'>
      {/* code speed buttons */}
      <div className='speed-buttons'>
        <h1 className='code-speed'>Code Speed : {codeSpeed / 1000}s</h1>
        <button
          onClick={slowDown}
        >
          <img src="/images/uparrow.png" alt="Back" width="20" height="17"/>
        </button>
        <br></br>
        <button
          onClick={speedUp}
        >
          <img src="/images/downarrow.png" alt="Back" width="20" height="17"/>
        </button>
      </div>


        <GameView
          onUserClick={handleUserClick}
          buttonDisabled={buttonDisabled}
        ></GameView>
        <CodeView currentLine={currentLine}></CodeView>
      </div>
    </div>
  )
}

export default page
