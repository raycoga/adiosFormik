import React from "react";

function useFormValidation(initialState, validate) {
  /* en este state se estaran seteando cada uno de los valores del formulario */
  const [values, setvalues] = React.useState(initialState);
  const [errors, seterrors] = React.useState({});
  const [isSubmiting, setisSubmiting] = React.useState(false);
  React.useEffect(
    () => {
      if (isSubmiting) {
        let noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
          console.log("authenticated!", values.email, values.password);
          setisSubmiting(false);
        } else {
          setisSubmiting(false);
        }
      }
    },
    [errors]
  );
  /* para actualizar los valores se usara esta funcion */
  const handleChange = e => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handleBlur = () => {
    const validationErrors = validate(values);
    seterrors(validationErrors);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    seterrors(validationErrors);
    setisSubmiting(true);
  };
  /* para devolver varios parametros los pasamos como un objeto en el return */
  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmiting
  };
}

export default useFormValidation;
