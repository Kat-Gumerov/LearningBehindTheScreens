import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* game menu */}
      <h1>Games:</h1>
      <ul>
        <Link href='/rockPaperScissors'>
          <li>Rock Paper Scissors</li>
        </Link>
        <li>Hangman</li>
        <li>Word Scramble</li>
      </ul>
    </div>
  )
}
