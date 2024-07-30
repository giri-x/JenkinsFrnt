import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
 
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', email, password);
 
    try {
      const response = await axios.get(`http://localhost:1229/user/getEmail/${email}`);
      const userData = response.data;
      console.log('Response:', userData);
 
      if (password === userData.pass) {
        alert("Login Success!!!")
       
        navigate("/Home");
      } else {
        setError("Incorrect credentials. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred. Please try again.");
    }
  };
 
  return (
    <div className="containerlogin">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Log in to your account</h2>
 
              {error && <p className="text-danger">{error}</p>}
 
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
 
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
 
                <button type="submit" className="btnlogin btnlogin-primary">
                  Sign in
                </button>
              </form>
 
              <p className="text-center mt-4">Don't have an account? <Link to="/Signup">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Login;