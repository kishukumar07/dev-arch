import React from "react";
import { createContext, useState } from "react";

export const CounterContext = createContext(); //not a hook

function CounterContextComponent({ children }) {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <CounterContext.Provider value={{ counter, setcounter }}>
        <>{children}</>
      </CounterContext.Provider>
    </div>
  );
}

export default CounterContextComponent;
