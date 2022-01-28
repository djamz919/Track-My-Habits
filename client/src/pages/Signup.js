import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  return(
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-body">
          <h4>Sign Up</h4>
            <form>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                //value={formState.username}
                //onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                //value={formState.email}
                //onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your password"
                name="password"
                type="password"
                id="password"
                //value={formState.password}
                //onChange={handleChange}
              />
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
            <div>
              <Link to='/'>Return To Login</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;