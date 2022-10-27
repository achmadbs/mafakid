import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

export default function SignUp() {
  return (
    <section className="signin__container">
      <div className="form__container">
        <h3>Create a new account</h3>
        <form className="form__wrapper__signup">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter email" />
          <label htmlFor="name">Full name</label>
          <input name="name" type="text" placeholder="Enter full name" />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password  "
          />
          <button disabled>Sign Up</button>
          <p>
            By clicking “Sign Up” you agree to our
            <br />
            <Link>Terms</Link> & <Link>Privacy Policy.</Link>
          </p>
        </form>
      </div>
      <p className="signup__text">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </section>
  );
}
