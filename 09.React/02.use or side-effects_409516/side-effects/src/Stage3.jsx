import React, { useState } from "react";
import WindowChange from "./WindowChange";

function Stage3() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <input onChange={() => setIsShow(!isShow)} type="checkbox" />
      {isShow ? <WindowChange /> : null}
    </div>
  );
}

export default Stage3;
