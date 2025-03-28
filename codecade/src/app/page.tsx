import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Codecade!!!</h1>
      <br />
      {/* game menu */}
      <h1>Games:</h1>
      <ul>
        <Link href='/rockPaperScissors'>
          <li>Rock Paper Scissors</li>
        </Link>
        <Link href='/hangman'>
          <li>Hangman</li>
        </Link>
        <li>Word Scramble</li>
      </ul>
    </div>
  )
}
