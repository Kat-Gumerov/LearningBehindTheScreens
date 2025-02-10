// import { useState } from 'react'
import GameView from './components/GameView/GameView'
import CodeView from './components/CodeView/CodeView'
import './App.css'

function App() {
  return (
    <div className='main-div centered-element'>
      <div id='game-div' className='view-box'>
        <GameView></GameView>
      </div>
      <div id='code-div' className='view-box'>
        <CodeView></CodeView>
      </div>
    </div>
  )
}

export default App
