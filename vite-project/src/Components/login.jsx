import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-2lty.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.name,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }
      const data = await response.json();
      console.log(data)
      localStorage.setItem('token', data.token);
      navigate('/data');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, e.g., show an error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" name="name" placeholder="Enter your username" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Enter your password" onChange={handleInputChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
