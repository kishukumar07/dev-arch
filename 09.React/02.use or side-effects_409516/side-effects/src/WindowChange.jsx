import React, { useEffect } from "react";

function WindowChange() {
  let counter = 1;
  function Increment() {
    counter++;
    console.log(counter);
  }
  useEffect(() => {
    window.addEventListener("resize", Increment);
    return () => {
      window.removeEventListener("resize", Increment);
    };
  }, []);

  return (
    <div>
      <h1>Hello From Window Change</h1>
    </div>
  );
}

export default WindowChange;
