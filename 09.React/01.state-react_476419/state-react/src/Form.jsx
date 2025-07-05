import React, { useState } from "react";

function Form() {
  // Controlled Component
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (key, value) => {
    // formData[key] = value;
    setFormData({ ...formData, [key]: value });
    // setFormData(formData);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }}
    >
      <input
        value={formData.name}
        onChange={(event) => {
          changeHandler("name", event.target.value);
        }}
        type="text"
        id="name"
        placeholder="Name"
      />
      <input
        onChange={(event) => {
          changeHandler("email", event.target.value);
        }}
        value={formData.email}
        type="email"
        id="email"
        placeholder="Email"
      />
      <input
        value={formData.password}
        type="password"
        id="password"
        placeholder="Password"
        onChange={(event) => {
          changeHandler("password", event.target.value);
        }}
      />
      <input type="submit" value="Signup" />
    </form>
  );
}

export default Form;
