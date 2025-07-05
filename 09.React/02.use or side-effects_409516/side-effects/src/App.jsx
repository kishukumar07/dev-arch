import "./App.css";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";

//! Rules of Hooks:-
//? 1. Hooks can only be used in a react func component / custom hook
//? 2. Hooks should be used before the return statement

//  https://jsonplaceholder.typicode.com/todos
function App() {
  // Side Effect

  return (
    <div className="App">
      <Stage3 />
    </div>
  );
}

export default App;
