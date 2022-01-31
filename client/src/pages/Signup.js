import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [addUser, { error }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="card">
      <div className="card-body">
        <h4>Sign Up</h4>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
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
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        {error && <div>Sign up failed</div>}
        <div>
          <Link to='/login'>Return To Login</Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;