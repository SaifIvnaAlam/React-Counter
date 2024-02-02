import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter App</h1>

      <h1>{count}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;
