import './style.css'

const GameView = () => {
  // const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  const rps_options = ['ROCK', 'PAPER', 'SCISSOR']

  let RPS_Display = rps_options.map((option) => {
    return (
      <div key={option.indexOf} className='rps_option'>
        {option}
      </div>
    )
  })
  return (
    <div className='code-box'>
      <h1>Game View</h1>
      <div className='rps_options'>{RPS_Display}</div>
    </div>
  )
}

export default GameView
