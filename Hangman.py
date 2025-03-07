# Hangman
import random


# array of possible words for player to guess
wordList = ["coding", "codecade", "variable", "function", "integer", "string"]

# choose random word from array, then create variables to track duplicate letters, number of Guesses
word = wordList[random.randint(0, len(wordList) - 1)]
wordTracker = list(word)

# arrays to keep track of player progress in game
guessList = []
wrongGuesses = []
hangman = [
    "-----\n"
    " |  |\n"
    "    |\n"
    "    |\n"
    "    |\n"
    "   ___\n",
    
    "-----\n"
    " |  |\n"
    " O  |\n"
    "    |\n"
    "    |\n"
    "   ___\n",
    
    "-----\n"
    " |  |\n"
    " O  |\n"
    " |  |\n"
    "    |\n"
    "   ___\n",
    
    "-----\n"
    " |  |\n"
    " O  |\n"
    " |  |\n"
    "/   |\n"
    "   ___\n",
    
    "-----\n"
    " |  |\n"
    " O  |\n"
    " |  |\n"
    "/ \ |\n"
    "   ___\n",
    
   "-----\n"
    " |  |\n"
    "\O  |\n"
    " |  |\n"
    "/ \ |\n"
    "   ___\n",
    
    "-----\n"
    " |  |\n"
    "\O/ |\n"
    " |  |\n"
    "/ \ |\n"
    "   ___\n"
    
]

numGuesses = 0
# begin with array of _ to show number of letters in word
for i in range(len(word)):
    guessList.append("_")

# loop until player runs out of guesses
while(numGuesses < 2 * len(hangman)):
    
    # print out current status of hangman, guesses on word, and any wrongly guessed letters
    print(hangman[numGuesses//2])
    print("Guess the word:")
    print(guessList)
    print("Wrong guesses:")
    print(wrongGuesses)
    
    # break loop if player wins
    checkWord = "".join(guessList)
    if (checkWord == word):
        break
    
    # otherwise take in user guess
    guess = input("Guess a letter:\n")
    letter = 0
    
    # add guess to array to keep track of word
    if (guess in wordTracker):
        letter = word.index(guess)
        guessList[letter] = guess
        wordTracker.remove(guess)
        
        # if duplicate of that letter in the word
        if (guess in wordTracker):
            guessList[word.rindex(guess)] = guess
    
    # otherwise mark that letter as wrong
    else:
        wrongGuesses.append(guess)
        
    numGuesses += 1

# print out corresponding message if player wins or loses
if (checkWord == word):
    print("You win!! Victory!!!")
else:
    print("You lose! The word was:", word)


