
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import lo from '/lo.avif'
import {FaTimes} from 'react-icons/fa'

import '../styles/Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="regform">
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input placeholder='yourusername'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input placeholder='youremail@gmail.com'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit"><Link to='/Login' className='signss'>Register</Link></button>
      </form>
    </div>
    <div className="login-images">

    <div className="login-image-containers">
    <Link to='/'className='lnk'>
 Back to Home</Link>
        <img src={lo} alt=""  />
    </div>
</div>
    </div>
  );
};

export default Signup;
