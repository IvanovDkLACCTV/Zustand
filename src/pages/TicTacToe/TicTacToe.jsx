import { Link } from "react-router-dom"
import Game from "../../components/Game/GameHistory"

export default function TicTacToe() {
  const text = "<- Back to the Future ↯↯"
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Game />
      <Link className="home-button" to="/">
        <button>
          <p>{text}</p>
        </button>
      </Link>
    </div>
  )
}
