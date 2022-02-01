import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {

  const [formState, setFormState] = useState(
    {
      email: '',
      password: ''
    });

  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main>
      <div>
        <div className="card">
          <div className="card-body">
            <h4>Login</h4>
            <form onSubmit={handleFormSubmit} >
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your password"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="button" type="submit"
              // onClick={() => {navigate("/dashboard")}}
              >
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
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