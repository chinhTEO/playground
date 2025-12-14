import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((value) => value + 1)
  const decrement = () => setCount((value) => value - 1)
  const incrementByTen = () => setCount((value) => value + 10)
  const decrementByTen = () => setCount((value) => value - 10)

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Live counter</p>
        <h1>Tap to update the number in real time</h1>
        <p className="subtitle">
          Start from zero and use the controls to add or subtract 1 or 10 instantly.
        </p>
      </header>

      <section className="counter">
        <div className="counter-display" aria-live="polite" aria-atomic>
          {count}
        </div>
      </section>

      <div className="controls" aria-label="Counter controls">
        <button
          className="control-button"
          onClick={decrementByTen}
          aria-label="Decrease value by ten"
        >
          -10
        </button>
        <button className="control-button" onClick={decrement} aria-label="Decrease value by one">
          -1
        </button>
        <button className="control-button" onClick={increment} aria-label="Increase value by one">
          +1
        </button>
        <button
          className="control-button"
          onClick={incrementByTen}
          aria-label="Increase value by ten"
        >
          +10
        </button>
      </div>
    </main>
  )
}

export default App
