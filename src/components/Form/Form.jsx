import React from "react";
import { useState } from "react";
import validate from "./validation";
import Styles from "./Form.module.css";
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
    <div className={Styles.loginOverlay}>
      <h2>Iniciar sesión</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="email" className={Styles.label}>
              Email:{" "}
            </label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={Styles.inputForm}
            />

            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className={Styles.label}>
              Password:{" "}
            </label>
            <input
              className={Styles.inputForm}
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>

          <button
            disabled={
              !userData.email ||
              !userData.password ||
              errors.email ||
              errors.password
            }
            className={Styles.loginButton}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
