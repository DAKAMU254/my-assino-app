// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  // State to keep track of the counter
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello, my name is Danson Muchai</h1> {/* Replace with your name */}
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
