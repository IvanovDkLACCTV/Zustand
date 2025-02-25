import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css"
import BearCounterFunction from "./pages/BearCounter/BearCounter"

function App() {
  console.log("Hello from Zustand")
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/BearCounter">
              <button>Bear Counter</button>
            </Link>
          }
        />
        <Route path="/BearCounter" element={<BearCounterFunction />} />
      </Routes>
    </Router>
  )
}

export default App
