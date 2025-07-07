"use client";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    setcounter(JSON.parse(localStorage.getItem("counter")) || 0); //writting directly is not allowed
  }, []); //useEffectcode only runs in the frontend ...

  return (
    <div>
      <h1>counter:-{counter}</h1>
      <button
        onClick={() => {
          setcounter(counter + 1);
          localStorage.setItem("counter", JSON.stringify(counter + 1));
        }}
      >
        +
      </button>
    </div>
  );
}
