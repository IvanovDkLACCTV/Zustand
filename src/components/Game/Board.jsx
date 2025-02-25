import "./Game.css"
import Square from "./Square"
import useGameStore from "../../hooks/useGameStore"

export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares)
  const player = xIsNext ? "X" : "O"

  function handleClick(i) {
    if (squares[i]) return
    const nextSquares = squares.slice()
    nextSquares[i] = player
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div className="board">
      {squares.map((square, squareIndex) => (
        <Square
          key={squareIndex}
          value={square}
          onSquareClick={() => handleClick(squareIndex)}
        />
      ))}
    </div>
  )
}
