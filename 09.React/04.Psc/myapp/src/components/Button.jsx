import React from "react";

function Button({disable, onClick, color, text }) {
  return (
    <button disabled ={disable} onClick={onClick} style={{ background: color }}>
      {text}
    </button>
  );
}

export default Button;
