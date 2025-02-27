import { Link } from "react-router-dom"
import Board from "../../components/Game/Board"

export default function TicTacToe() {
  const text = "<- Back to the Future ↯↯"
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
      <Link className="home-button" to="/">
        <button>
          <p>{text}</p>
        </button>
      </Link>
    </div>
  )
}
