import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  // const [state, setState] = useState(default value);
  // let counter = 0;
  console.log("OK");
  return (
    <div className="App">
      <h1>Counter:- {counter}</h1>
      <button
        onClick={() => {
          // counter++;
          setCounter(2);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // counter--;
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
