import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cubic() {
  const navigate=useNavigate();
  const callBcubic = () => {
    navigate('/BCubic');
  }
  // State to store the input values
  const [firstElementValue, setFirstElementValue] = useState('');
  const [secondElementValue, setSecondElementValue] = useState('');
  const [thirdElementValue, setThirdElementValue] = useState('');
  const [fourthElementValue, setFourthElementValue] = useState('');

  // Function to capture the input values and send them to the backend
  const handleSubmit = async () => {
    // Prepare the data to send
    const cubicData = {
      firstElementValue,
      secondElementValue,
      thirdElementValue,
      fourthElementValue,
    };

    try {
      // Send the data to the backend using a POST request
      const response = await fetch('http://localhost:5000/cubic/cubic-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cubicData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data successfully sent to backend:', result);
      } else {
        console.error('Failed to send data to backend');
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className='cubic'>
      <div className="p-1 p-md-3 border rounded-3 bg-body-tertiary">
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span role="status">
            <h1>Welcome to Cubic system</h1>
          </span>
        </button>
        <div className="form-floating mb-1">
          <h2>Enter your First Element Positions*</h2>
          <input
            className="form-control"
            value={firstElementValue}
            onChange={(e) => setFirstElementValue(e.target.value)}
            placeholder="number"
          />
        </div>
        <div className="form-floating mb-1">
          <h2>Enter your Second Element Positions</h2>
          <input
            type="text"
            className="form-control"
            value={secondElementValue}
            onChange={(e) => setSecondElementValue(e.target.value)}
            placeholder="Second Element"
          />
        </div>
        <div className="form-floating mb-1">
          <h2>Enter your Third Element Positions</h2>
          <input
            type="text"
            className="form-control"
            value={thirdElementValue}
            onChange={(e) => setThirdElementValue(e.target.value)}
            placeholder="Third Element"
          />
        </div>
        <div className="form-floating mb-1">
          <h2>Enter ray direction (u,v,w) </h2>
          <input
            type="text"
            className="form-control"
            value={fourthElementValue}
            onChange={(e) => setFourthElementValue(e.target.value)}
            placeholder="Fourth Element"
          />
        </div>
        <p><strong>Center of Cubic system is considered as (0,0,0)</strong></p>
        <button
  className="w-100 btn btn-lg btn-primary"
  onClick={() => {
    handleSubmit(); // Call the first function
    callBcubic();
  }}
>
  Enter
</button>
      </div>
    </div>
  );
}

export default Cubic;
