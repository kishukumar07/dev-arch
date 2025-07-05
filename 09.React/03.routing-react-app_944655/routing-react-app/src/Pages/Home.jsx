import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {apiData.map((element) => {
        return <Card key={element.id} data={element} />;
      })}
    </div>
  );
}

export default Home;
