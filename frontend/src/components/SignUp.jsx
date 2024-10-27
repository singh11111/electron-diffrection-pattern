import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    try {
      // Send the data to the backend using a POST request
      const response = await fetch('http://localhost:5000/login/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Wrap email and password in an object
      });

      if (response.ok) {
        const result = await response.json();
        if (result === "exist") {
          alert('User already exists');
          navigate('/Login');
        } else {
          navigate('/');
          console.log('Signup successful');
        }
      } else {
        console.error('Failed to send data to backend');
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Sign up For free</h1>
        </div>

        <div className="modal-body p-5 pt-0">
          <form onSubmit={handleSubmit}> {/* onSubmit should be on the form */}
            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control rounded-3"  
                onChange={(e) => setEmail(e.target.value)} 
                id="floatingInput" 
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type="password" 
                className="form-control rounded-3"   
                onChange={(e) => setPassword(e.target.value)} 
                id="floatingPassword" 
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
              Sign up
            </button>
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

