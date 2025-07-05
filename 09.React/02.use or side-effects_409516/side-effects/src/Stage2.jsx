import { useState, useEffect } from "react";

function Stage2() {
  const [serverData, setServerData] = useState(null);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServerData(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [counter]);

  return (
    <div>
      <h1>{JSON.stringify(serverData)}</h1>\<h1>Counter:- {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default Stage2;
// 1. Hooks
// 2. compononet Lifecycle
// 3. useEffect -> mounting
// 4. fetch Data
// 5. loopng over data and show elements
// 6. useEffect -> updating
