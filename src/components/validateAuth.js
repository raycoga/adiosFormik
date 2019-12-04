export default function validateAuth(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Required email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //para password

  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6";
  }
  return errors;
}
