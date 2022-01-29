import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';


const Login = (props) => {

  const [formState, setFormState] = useState(
    { email: '', 
    password: '' });

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
        // Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
  const [login, { error }] = useMutation(LOGIN);
  return(
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