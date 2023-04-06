const validate = (userData) => {
  let errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!userData.email) {
    errors.email = "Campo requerido";
  }
  if (userData.email.length > 35) {
    errors.email = "No puede superar los 35 caracteres";
  }
  if (!userData.password) {
    errors.password = "Campo requerido";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Debe tener por lo menos un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }
  //     } else {
  //       setErrors({ ...errors, password: "" });
  //     }

  return errors;
};
export default validate;
