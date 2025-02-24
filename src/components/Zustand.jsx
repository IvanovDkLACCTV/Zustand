import useStore from "../hooks/store"

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  const decreasePopulation = useStore((state) => state.decreasePopulation)
  const removeAllBears = useStore((state) => state.removeAllBears)
  const updateBears = useStore((state) => state.updateBears)
  return (
    <div>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={decreasePopulation}>one down</button>
      <button onClick={removeAllBears}>remove all</button>
      <button onClick={updateBears}>update all</button>
    </div>
  )
}

export { BearCounter, Controls }
