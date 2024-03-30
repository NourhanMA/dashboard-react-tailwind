import { Formik, Field, Form } from "formik";
import styles from "../style/Login.module.css";

const Signup = () => {
  const initialValuesForm = {
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let users = [];
  const handleSubmit = (values) => {
    users = localStorage.getItem("users") ? localStorage.getItem("users") : [];
    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
  };
  const isValidEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  const handleValidate = (values) => {
    // debugger;
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Please enter your fullname ";
    }
    if (!values.phone) {
      errors.phone = "Please enter your mobile number";
    }
    if (!values.email) {
      errors.email = "Please enter your email ";
    } else {
      const isValid = isValidEmail.test(values.email);
      console.log(isValid);
      if (!isValid) {
        errors.email = "Please enter a valid email";
      }
    }
    if (!values.password) {
      errors.password = "Please enter your password ";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please reenter your password ";
    } else {
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password not match";
      }
    }

    return errors;
  };

  return (
    <div className="w-full  md:w-3/4 bg-white min-h-80 items-center flex flex-col rounded-lg shadow">
      <Formik
        initialValues={initialValuesForm}
        onSubmit={handleSubmit}
        validate={handleValidate}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form className="w-full  md:w-1/3 bg-white min-h-80 ">
            <h1 className="text-3xl text-indigo-800 my-8">
              Create new account
            </h1>
            <Field
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              className="sign-up-input"
            />
            {errors.fullname && (
              <p className={styles.error}>{errors.fullname}</p>
            )}

            <Field
              type="text"
              name="phone"
              placeholder="Enter your phone"
              className="sign-up-input"
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}

            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="sign-up-input"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="sign-up-input"
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="sign-up-input"
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword}</p>
            )}
            <input
              type="submit"
              value="Create "
              className=" rounded-lg bg-indigo-800 px-10 py-3 m-10 text-white cursor-pointer hover:opacity-80"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
