import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return(
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
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
                placeholder="******"
                name="password"
                type="password"
                id="password"
                //value={formState.password}
                //onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
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