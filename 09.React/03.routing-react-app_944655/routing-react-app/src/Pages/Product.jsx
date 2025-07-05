import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  let { product_id } = useParams();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${product_id}`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, [product_id]);
  return <div>{apiData ? <h1>{JSON.stringify(apiData)}</h1> : null}</div>;
}

export default Product;
