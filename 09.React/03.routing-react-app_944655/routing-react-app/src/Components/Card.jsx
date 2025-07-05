import React from "react";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
function Card(prop) {
  const navigate = useNavigate();
  return (
    <h1
      onClick={() => navigate(`/product/${prop.data.id}`)}
      className={style.red}
      style={{ marginTop: "50px" }}
    >
      {JSON.stringify(prop.data)}
    </h1>
  );
}

export default Card;
// margin-top -> snake case
// marginTop -> camelCase
