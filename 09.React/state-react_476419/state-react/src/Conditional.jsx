import React, { useState } from "react";

// ! Conditional Rendering
function Conditional() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          setIsShow(!isShow);
        }}
      />

      {isShow ? <h1>I am Visible</h1> : null}
    </div>
  );
}

export default Conditional;
