import React from 'react'

interface CodeViewProps {
  currentLine: number
}

const CodeView = ({ currentLine }: CodeViewProps) => {
  const hangman_code = [
    'def play_round(guess, random_word):',
    'word = random_word',
    '# Now, we need to show the player how many letters are in the word.',
    "# We'll use underscores to represent the hidden letters.",
    'guessed_letters = ["_"] * len(word)',
    'print(" ".join(guessed_letters))',
    "# We'll give the player 6 tries to guess the word.",
    'tries = 6',
    "# Now, we'll start the game loop.",
    'while tries > 0 and "_" in guessed_letters:',
    '    # Check if the letter is in the word.',
    '    if guess in word:',
    '        # If it is, replace the underscores with the guessed letter.',
    '        for i in range(len(word)):',
    '            if word[i] == guess:',
    '                guessed_letters[i] = guess',
    '    else:',
    "        # If it's not, take away a try.",
    '        tries -= 1',
    '# Check if the player won or lost.',
    'if "_" not in guessed_letters:',
    '    print("You win!")',
    'else:',
    '    print(f"Game Over")',
  ]

  // Display code line by line from array
  let codeLines = hangman_code.map((line, index) => {
    return (
      <h3 key={index} className={index === currentLine ? 'bg-yellow-400' : ''}>
        {index}: {line}
      </h3>
    )
  })

  return (
    <div>
      <div className='border-4 border-solid border-black p-4'>{codeLines}</div>
    </div>
  )
}

export default CodeView
