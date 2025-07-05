import { useState, useEffect } from "react";
import Todo from "./Todo";

function Stage1() {
  // Side Effect
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => {
        setServerData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      {serverData.map((element) => {
        return (
          <Todo
            status={element.completed}
            title={element.title}
            key={element.id}
          />
        );
      })}
    </div>
  );
}

export default Stage1;
