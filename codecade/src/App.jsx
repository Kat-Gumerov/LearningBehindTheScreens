// import { useState } from 'react'
import GameView from './components/GameView/GameView'
import CodeView from './components/CodeView/CodeView'
import './App.css'

function App() {
  return (
    <>
      <div id='game_div'>
        <GameView></GameView>
      </div>
      <div id='code_div'>
        <CodeView></CodeView>
      </div>
    </>
  )
}

export default App
