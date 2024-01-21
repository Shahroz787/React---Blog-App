import React from "react";
import { RegisterContainer } from "./RegisterElements";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <RegisterContainer>
      <span>Register Form</span>

      <form>
        <label>User Name:</label>
        <input type="text" placeholder="Enter your username..." />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email..." />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password..." />

        <button className="Register__Btn">Register Now</button>
      </form>

      <button className="Login__Btn">
        <Link className="link" to="/login">
          LOGIN HERE
        </Link>
      </button>
    </RegisterContainer>
  );
};

export default Register;
