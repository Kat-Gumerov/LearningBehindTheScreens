import { useState } from 'react'
import GameView from './components/GameView/GameView'
import CodeView from './components/CodeView/CodeView'
import './App.css'

function App() {
  const [currentLine, setCurrentLine] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleUserClick = async () => {
    setButtonDisabled(true)
    setCurrentLine(4)

    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(6)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(9)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(13)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    setCurrentLine(0)
    setButtonDisabled(false)
  }

  return (
    <div className='main-div centered-element'>
      <div id='game-div' className='view-box'>
        <GameView
          onUserClick={handleUserClick}
          buttonDisabled={buttonDisabled}
        ></GameView>
      </div>
      <div id='code-div' className='view-box'>
        <CodeView currentLine={currentLine}></CodeView>
      </div>
    </div>
  )
}

export default App
