import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

// instead of using props deconstruct props ({setAlert})
const Register = ({ setAlert, register }) => {
  // state = formData, function to update the state = setformData and pull form useState() hook. enter default values ({})
  const [formData, setFormData] = useState({
    // initial state
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  // Deconstructoring or what I want to pull out form form formData
  const { name, email, password, password2 } = formData;

  // to use onChange on every field []
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      // console.log("Passwords do not match");
      // Note!!!! props.setAlert add message and alert type
      setAlert("Passwords do not match", "danger");
    } else {
      // console.log("SUCCESS");
      register({ name, email, password });
      // Test registration within a component : we will delete and use redux
      // make sure you:  import axios from "axios"; at the top

      // const onSubmit = async e => {
      //   e.preventDefault();
      //   if (password !== password2) {
      //     console.log("Passwords do not match");
      //   } else {
      //     // console.log(formData);
      //     const newUser = {
      //       name,
      //       email,
      //       password
      //     };

      //     try {
      //       const config = {
      //         headers: {
      //           "Content-Type": "application/json"
      //         }
      //       };
      //       const body = JSON.stringify(newUser);

      //       // route,data of body and config which has the header on the content type
      //       const res = await axios.post("/api/users", body, config);
      //       console.log(res.data);
      //     } catch (err) {
      //       console.error(err.response.data);
      //     }
      //   }
      // };
    }
  };
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            {/* Note!!!! add value = {name} for state  and  onChange={e => onChange(e)}*/}
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              // required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              // required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              // minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              // minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

Register.prototypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

// when using connect pass in two things get the state from alert or profile or anything else would put as first parameter, Second is going to be an object with any actions you want to use this will alow us to access props do set alert.
export default connect(null, { setAlert, register })(Register);
