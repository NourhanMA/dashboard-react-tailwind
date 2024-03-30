import { Formik, Field, Form } from "formik";
import styles from "../style/Login.module.css";

import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    localStorage.setItem("username", values.username);
    navigate("/users");
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
      validate={handleValidate}
      validateOnBlur={false}
    >
      {({ errors }) => (
        <Form className={styles.form}>
          <h1>Welcome!</h1>
          <Field
            type="text"
            name="username"
            placeholder="Enter your username"
            className={styles.field}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className={styles.field}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <input
            type="submit"
            value="Login"
            className=" rounded-lg bg-indigo-800 px-10 py-3 mt-8 text-white cursor-pointer hover:opacity-80"
          />

          <div className=" w-full m-8 border-b border-gray-200 "></div>
          <Link
            to="/signup"
            className=" rounded-lg bg-green-400 px-10 py-3 text-white hover:opacity-80"
          >
            <button>Create new account</button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
