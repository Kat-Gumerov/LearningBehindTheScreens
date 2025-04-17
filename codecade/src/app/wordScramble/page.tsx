'use client'
import '../styles/dualscreen.css'
import React, { useState } from 'react'
import Link from 'next/link'
import CodeView from './CodeView'
import GameView from './GameView'
import { getExplanation } from '../../../utils/api'

const Page = () => {
  const [currentLine, setCurrentLine] = useState<number | null>(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [codeSpeed, setCodeSpeed] = useState(1000)
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [completedLines, setCompletedLines] = useState<number[]>([])

  const word_scramble_code = [
    'def scramble(original_word, scrambled_word, tries):',
    '    while tries > 0:',
    '        guess = input()',
    '        if guess.lower() == original_word:',
    '            return "Correct!"',
    '        else:',
    '            tries -= 1',
    '            return "Wrong. {tries} tries left."',
    '    return "You lost! The word was {original_word}."',
  ]

  const handleUserClick = async (codeArray: number[]): Promise<void> => {
    setButtonDisabled(true)
    setCompletedLines([])

    for (let i = 0; i < codeArray.length; i++) {
      setCurrentLine(codeArray[i])
      setCompletedLines((prev) => [...prev, codeArray[i]])
      await new Promise((resolve) => setTimeout(resolve, codeSpeed))
    }

    setCurrentLine(null)
    setButtonDisabled(false)
  }

  const speedUp = () => {
    setCodeSpeed((prevSpeed) => Math.max(200, prevSpeed - 200))
  }

  const slowDown = () => {
    setCodeSpeed((prevSpeed) => prevSpeed + 200)
  }

  const handleExplain = async (index: number) => {
    setLoading(true)
    setError(null)
    try {
      const result = await getExplanation(
        word_scramble_code[index],
        'word scramble game'
      )
      setExplanation(result)
    } catch (error) {
      setError('An error occurred while fetching the explanation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className='flex items-center'>
        {/* back button */}
        <Link href={'/play'}>
          <button>
            <img src='/images/arrow.png' alt='Back' width='100' height='100' />
          </button>
        </Link>
        <div className='flex-1 text-center'>
          <h1 className='title'>Word Scramble</h1>
        </div>
      </div>

      <div>
        <div className='speed-buttons flex '>
          <h1 className='code-speed text-xl'>
            Code Speed : {codeSpeed / 1000}s
          </h1>
          <div className='flex flex-col ml-2'>
            {' '}
            <button onClick={speedUp} className='mb-1'>
              <img
                src='/images/uparrow.png'
                alt='Back'
                width='18'
                height='15'
              />
            </button>
            <button onClick={slowDown}>
              <img
                src='/images/downarrow.png'
                alt='Back'
                width='18'
                height='15'
              />
            </button>
          </div>
        </div>
      </div>

      {/* displaying Game View and Code View */}
      <div className='dualscreen-container'>
        <GameView
          onUserClick={handleUserClick}
          buttonDisabled={buttonDisabled}
        ></GameView>
        <CodeView
          currentLine={currentLine}
          code={word_scramble_code}
          onUserClick={handleExplain}
          completedLines={completedLines}
        ></CodeView>
      </div>
      <div className='ai-container'>
        {loading ? (
          <p>Thinking...</p>
        ) : error ? (
          <p className='text-red-600'>{error}</p>
        ) : explanation ? (
          <div className=''>
            <p>Explanation: {explanation}</p>
          </div>
        ) : (
          <h1>
            Click the light bulb icon to learn what the line of code does!
          </h1>
        )}
      </div>
    </div>
  )
}

export default Page
