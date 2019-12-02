import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // state = formData, function to update the state = setformData and pull form useState() hook. enter default values ({})
  const [formData, setFormData] = useState({
    // initial state
    email: "",
    password: ""
  });
  // Deconstructoring or what I want to pull out form form formData
  const { email, password } = formData;

  // to use onChange on every field []
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("SUCCESS");
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign Into Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              //  Note!!!! add value = {email} for state  and  onChange={e => onChange(e)}
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};
export default Login;
