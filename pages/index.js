// pages/signin.js

import React from 'react';

const Signin = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (will be added later)
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
