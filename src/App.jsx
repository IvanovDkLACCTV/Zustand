import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css"
import BearCounterFunction from "./pages/BearCounter/BearCounter"
import TicTacToe from "./pages/TicTacToe/TicTacToe"

function App() {
  console.log("Hello from Zustand")
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/BearCounter">
                <button>Bear Counter</button>
              </Link>
              <Link to="/TicTacToe">
                <button>Tic Tac Toe</button>
              </Link>
            </>
          }
        />
        <Route path="/BearCounter" element={<BearCounterFunction />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </Router>
  )
}

export default App
