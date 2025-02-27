import "./Game.css"
import { useGameStore } from "../../hooks/useGameStore"
import Board from "./Board"

export default function Game() {
  const history = useGameStore((state) => state.history)
  const setHistory = useGameStore((state) => state.setHistory)
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const currentSquares = history[history.length - 1]

  const currentMove = useGameStore((state) => state.currentMove)
  const setCurrentMove = useGameStore((state) => state.setCurrentMove)

  function handlePlay(nextSquares) {
    setHistory(history.concat([nextSquares]))
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    setXIsNext(currentMove % 2 === 0)
  }

  return (
    <div className="game-wrapper">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="game-history">
        <h2>Game History</h2>
        <ol>
          {history.map((_, historyIndex) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : "Go to game start"

            return (
              <li key={historyIndex}>
                <button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
