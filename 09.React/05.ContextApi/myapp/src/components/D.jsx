import React, { useState, useContext } from "react";

import { CounterContext } from "./CounterContextComponent";

function D() {
  const context = useContext(CounterContext); //hook
    
  console.log(context);
  
  return (
    <div>
      D<h1>Counter :- {context?.counter}</h1>
    </div>
  );
} 

export default D;
