import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return(
    <main>
      <div>
        <div className="card">
          <div className="card-body">
          <h4>Login</h4>
            <form>
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
              <h5>Don't have an account?</h5>
              <Link to='/signup'>Create One Here!</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login;