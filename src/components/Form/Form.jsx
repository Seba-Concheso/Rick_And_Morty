import React from "react";
import { useState } from "react";
import validate from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Formulario de ingreso</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />

        <hr />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <hr />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button
        disabled={
          !userData.email ||
          !userData.password ||
          errors.email ||
          errors.password
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
