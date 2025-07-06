import React, { useState, useContext } from "react";

import { CounterContext } from "./A";

function G() {
  const context = useContext(CounterContext);
  return (
    <div>
      G<h1>counter:-{context?.counter}</h1>
    </div>
  );
}

export default G;
