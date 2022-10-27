import React from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css';

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <section className="signin__container">
      <div className="form__container">
        <h3>Reset password</h3>
        <form className="form__wrapper">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter email" />
          <button disabled>Send Reset Link</button>
          <p onClick={() => navigate(-1)}>Back to Sign In</p>
        </form>
      </div>
    </section>
  );
}
