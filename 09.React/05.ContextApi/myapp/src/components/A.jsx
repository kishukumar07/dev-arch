import React, { useState, createContext } from "react";

import B from "./B";
import C from "./C";

export const CounterContext = createContext(); //not a hook

function A() {
  //Declaring the State for counter here in order to pass form G to D

  const [counter, setcounter] = useState(0);

  return (
    <div>
      A
      <CounterContext.Provider value={{counter,setcounter}}  >
        <B />
        <C />
      </CounterContext.Provider>
    </div>
  );
}

export default A;
