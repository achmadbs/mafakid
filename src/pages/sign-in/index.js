import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

export default function SignIn() {
  return (
    <section className="signin__container">
      <div className="form__container">
        <h3>Sign in</h3>
        <form className="form__wrapper">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter email" />
          <button disabled>Continue</button>
          <Link to="/forgotpassword">Forgot Password?</Link>
        </form>
      </div>
      <p className="signup__text">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </section>
  );
}
