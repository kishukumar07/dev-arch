import React from "react";
import styles from "./Login.module.css";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleInputs = (e) => {
    let { name, value } = e.target;
    // console.log(name,value)
    setState({
      ...state,
      [name]: value,
    });
    // console.log(state);
  };

  const handleLogin = async () => {
    try {
      let response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "content-type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });
      response = await response.json();
      if (response.token) {
        // console.log(response);
        nav("/home");
      } else {
        alert("wrong Credientials");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className={styles.form}>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div>
        <Button
          text={"submit"}
          color={"yellow"}
          onClick={() => handleLogin()}
        />
      </div>
    </div>
  );
}

export default Login;
