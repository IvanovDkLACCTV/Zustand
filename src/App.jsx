import "./App.css"
import { BearCounter, Controls } from "./components/Zustand"

function App() {
  console.log("Hello from Zustand")
  return (
    <>
      <div>
        <h1>Bears</h1>
        <BearCounter />
        <Controls />
      </div>
    </>
  )
}

export default App
