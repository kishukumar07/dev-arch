import React, { createContext } from "react";

import B from "./B";
import C from "./C";
import CounterContextComponent from "./CounterContextComponent";

function A() {
  //Declaring the State for counter here in order to pass form G to D

  return (
    <div>
      A
      <CounterContextComponent>
        <B />
        <C />
      </CounterContextComponent>
    </div>
  );
}

export default A;
