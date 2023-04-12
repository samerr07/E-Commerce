import React from 'react'
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
    <form className="login-form">
      <h2>Log In</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button type="submit" className="login-btn">Log In</button>
      <p className="forgot-password">Forgot Password?</p>
      <p className="register-link">Don't have an account? <a href="#">Register now</a></p>
    </form>
  </div>
  )
}

export default Login
