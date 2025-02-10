import './style.css'

const CodeView = () => {
  const code = [
    'def handle_move(position):',
    '    # Initialize the game board',
    '    if board[position] == "":',
    '        # Get the current player (X or O)',
    '        player = current_player',
    "        # Place the player's mark on the board",
    '        board[position] = player',
    '        # Check if there is a winner',
    '        winner = check_winner(board)',
    '        if winner:',
    "            # If there's a winner, end the game",
    '            return winner',
    '        # Switch to the other player',
    '        current_player = "O" if player == "X" else "X"',
  ]

  let codeLines = code.map((line) => {
    return <h2 key={line.indexOf}>{line}</h2>
  })

  return (
    <div className='code-box'>
      <h1>Code View</h1>
      {codeLines}
    </div>
  )
}

export default CodeView
