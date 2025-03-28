import React from 'react'

interface CodeViewProps {
  currentLine: number
}

const CodeView = ({ currentLine }: CodeViewProps) => {
  const hangman_code = [
    "# Let's play Hangman!",
    '# First, we need a list of words to guess from.',
    'words = ["code", "web", "chip", "byte", "file"]',
    '',
    '# We need to pick a random word from the list.',
    'import random',
    'word = random.choice(words)',
    '',
    '# Now, we need to show the player how many letters are in the word.',
    "# We'll use underscores to represent the hidden letters.",
    'guessed_letters = ["_"] * len(word)',
    'print(" ".join(guessed_letters))',
    '',
    "# We'll give the player 6 tries to guess the word.",
    'tries = 6',
    '',
    "# Now, we'll start the game loop.",
    'while tries > 0 and "_" in guessed_letters:',
    '    # Ask the player to guess a letter.',
    '    guess = input("Guess a letter: ").lower()',
    '',
    '    # Check if the guess is a single letter.',
    '    if len(guess) != 1 or not guess.isalpha():',
    '        print("Please guess only one letter.")',
    '        continue',
    '',
    '    # Check if the letter is in the word.',
    '    if guess in word:',
    '        # If it is, replace the underscores with the guessed letter.',
    '        for i in range(len(word)):',
    '            if word[i] == guess:',
    '                guessed_letters[i] = guess',
    '    else:',
    "        # If it's not, take away a try.",
    '        tries -= 1',
    '        print("Wrong guess!")',
    '',
    '    # Show the player the current state of the word.',
    '    print(" ".join(guessed_letters))',
    '    print(f"You have {tries} tries left.")',
    '',
    '# Check if the player won or lost.',
    'if "_" not in guessed_letters:',
    '    print("You win!")',
    'else:',
    '    print(f"The word was {word}. You lose!")',
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
