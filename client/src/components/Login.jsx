import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/index.css';

const Login = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);
  const [loginData, setLoginData] = useState({});

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', loginData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/dashboard/equipment');
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/users/login', loginData);
      history.push('/dashboard/equipment');
    } catch (error) {
      swal('Login unsuccessful. Please try again.', { icon: 'error' });
    }
  };

  return (
    <div className="login-container">
      <div className="main-area">
        <form className="form" name="login-form" onSubmit={handleSubmit}>
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              className="text-input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="password"
              className="text-input"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="btn-area">
            <input type="submit" className="btn-1" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
