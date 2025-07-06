import React from "react";

import { useState, useEffect } from "react";
import List from "./List";
import Button from "./Button";
import styles from "./Home.module.css";

function Home() {
  const [todos, settodos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchdata = async () => {
    try {
      let responsedata = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}`
      );
      responsedata = await responsedata.json();
      settodos(responsedata);
      console.log(responsedata);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [page]);

  return (
    <div>
      <div>
        <h1>Todos</h1>
        <div>
          {todos.map((el) => (
            <div key={el.id}>
              <List text={el.title} />
            </div>
          ))}
          <div className={styles.buttondiv}>
            {/* button component  */}

            <Button
              disable={page === 1}
              onClick={() => setPage((page) => page - 1)}
              text={"<"}
              color={"red"}
            />
            {page}

            <Button
              onClick={() => setPage((page) => page + 1)}
              text={">"}
              color={"green"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
