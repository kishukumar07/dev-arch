import React from "react";

function Todo({ title, status }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{status.toString()}</h4>
    </div>
  );
}

export default Todo;
// false -> "false"
