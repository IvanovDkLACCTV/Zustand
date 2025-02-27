import "./Game.css"
import Square from "./Square"
import { calculateStatus, calculateTurns, calculateWinner } from "./Logic"
import PropTypes from "prop-types"

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares)
  const turns = calculateTurns(squares)
  const player = xIsNext ? "X" : "O"
  const status = calculateStatus(winner, turns, player)

  function handleClick(i) {
    if (squares[i] || winner) return
    const nextSquares = squares.slice()
    nextSquares[i] = player
    onPlay(nextSquares)
  }

  // Add PropTypes for the component
  Board.propTypes = {
    xIsNext: PropTypes.bool.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    onPlay: PropTypes.func.isRequired,
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </div>
  )
}
