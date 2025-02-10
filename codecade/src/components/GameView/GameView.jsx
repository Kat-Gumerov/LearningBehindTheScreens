import './style.css'

const GameView = () => {
  const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

  let boardDisplay = board.map((square) => {
    return (
      <div key={square.indexOf} className='square'>
        square
      </div>
    )
  })
  return (
    <div className='code-box'>
      <h1>Game View</h1>
      <div className='board'>{boardDisplay}</div>
    </div>
  )
}

export default GameView
