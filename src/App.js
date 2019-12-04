import React, { useEffect } from "react";

import "./App.css";

import useFormValidation from "./components/useFormValidation";
import validateAuth from "./components/validateAuth";

/* Se creara un objeto para settear el estado inicial de las cosas, aca se pasaran los valores iniciales de nuestros campos */
const INITIAL_STATE = {
  /* estos atributos deberan de tener el mismo nombre que el de los inputs para q sepan donde se van a guardar */
  email: "",
  password: ""
};

function App() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmiting
  } = useFormValidation(INITIAL_STATE, validateAuth);

  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && "error-input"}
          autoComplete="off"
          placeholder="Your email address"
        />
        {errors.email &&
          <p className="error-text">
            {" "}{errors.email}
          </p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="password"
          className={errors.password && "error-input"}
          value={values.password}
          placeholder="Choose a safe password"
        />
        {errors.password &&
          <p className="error-text">
            {" "}{errors.password}
          </p>}
        <div>
          <button disabled={isSubmiting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
