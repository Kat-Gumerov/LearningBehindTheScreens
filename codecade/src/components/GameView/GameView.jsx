/* eslint-disable react/prop-types */
import './style.css'

const GameView = ({ onUserClick, buttonDisabled }) => {
  // const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  const rps_options = ['ROCK', 'PAPER', 'SCISSOR']

  let RPS_Display = rps_options.map((option, index) => {
    return (
      <button
        key={index}
        className='rps_option'
        onClick={() => onUserClick()}
        disabled={buttonDisabled}
      >
        {option}
      </button>
    )
  })
  return (
    <div className='code-box'>
      <h1>Game View</h1>
      <h2>Choose One</h2>
      <div className='rps_options'>{RPS_Display}</div>
    </div>
  )
}

export default GameView
