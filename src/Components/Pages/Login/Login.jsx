import React from "react";
import { LoginContainer } from "./LoginElements";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginContainer>
      <span>Login to Your Account</span>

      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email..." />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password..." />

        <button className="login__Btn">Login Now</button>
      </form>

      <button className="register__Btn">
        <Link className="link" to="/register">REGISTER HERE</Link>
      </button>
    </LoginContainer>
  );
};

export default Login;
