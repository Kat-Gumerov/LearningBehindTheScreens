'use client'
import '../styles/test.css'
import React, { useState } from 'react'
import Link from 'next/link'
import CodeView from './CodeView'
import GameView from './GameView'

const Page = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [codeSpeed, setCodeSpeed] = useState(1000)

  const handleUserClick = async (codeArray: number[]): Promise<void> => {
    setButtonDisabled(true)

    for (let i = 0; i < codeArray.length; i++) {
      setCurrentLine(codeArray[i])
      await new Promise((resolve) => setTimeout(resolve, codeSpeed))
    }

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
      <div>
        <Link href='..'>
          <button className='back-button'>
            <img src='/images/arrow.png' alt='Back' width='100' height='100' />
          </button>
        </Link>
      </div>

      <div>
        <h1 className='title'>Word Scramble</h1>
        {/* <div className='speed-buttons flex'>
          <h1 className='code-speed'>Code Speed : {codeSpeed / 1000}s</h1>
          <div className='flex flex-col'>
            <button onClick={speedUp}>
              <img
                src='/images/uparrow.png'
                alt='Speed Up'
                width='20'
                height='17'
              />
            </button>
            <br />
            <button onClick={slowDown}>
              <img
                src='/images/downarrow.png'
                alt='Slow Down'
                width='20'
                height='17'
              />
            </button>
          </div>
        </div> */}
      </div>

      <div className='dualscreen-container'>
        <GameView
          onUserClick={handleUserClick}
          buttonDisabled={buttonDisabled}
        />
        <CodeView currentLine={currentLine} />
      </div>
    </div>
  )
}

export default Page