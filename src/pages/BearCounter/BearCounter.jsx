import { Link } from "react-router-dom"
import { BearCounter, Controls } from "../../components/Counter/Counter"
import "./BearCounter.css"

export default function BearCounterFunction() {
  const text = "<- Back to Homepage"
  return (
    <div>
      <h1>Bears</h1>
      <BearCounter />
      <Controls />
      <Link className="home-button" to="/">
        <button>
          <p>{text}</p>
        </button>
      </Link>
    </div>
  )
}
