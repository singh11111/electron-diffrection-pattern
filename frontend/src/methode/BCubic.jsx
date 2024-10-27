import React, { useEffect, useState } from 'react';


const BCubic = () => {
  const [points, setPoints] = useState([]);
  const [fpoints,setfPoints] = useState([]);

  // Fetch the points data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/cubic/BCubic') // Replace with your backend URL if different
      .then(response => response.json())
      .then(data => setPoints(data))
      .catch(error => console.error('Error fetching points:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:5000/cubic/final') // Replace with your backend URL if different
      .then(response => response.json())
      .then(data => setfPoints(data))
      .catch(error => console.error('Error fetching points:', error));
  }, []);
const combinedPoints = points.map((point, index) => ({
    x: point[0],
    y: point[1],
    name: fpoints[index] ? `(${fpoints[index][0]}, ${fpoints[index][1]}, ${fpoints[index][2]})` : '' // Construct name as (x, y, z)
  }));
  return (
    <div className="bcubic-container">
    {combinedPoints.map((point, index) => (
      <div
        key={index}
        className="bright-point"
        style={{
            // Map the x value to the grid width (left: 50% is the center, each unit is 1/16th of 100%)
            left: `${50 + (point.x / 8) * 50}%`, // Calculate position relative to -8 to 8 range

            // Map the y value to the grid height (top: 50% is the center, each unit is 1/16th of 100%)
            top: `${50 - (point.y / 8) * 50}%`, // Invert y-axis to match screen coordinates
          }}
      >
        {/* Show the name of the point beside the dot */}
        <span className="point-name">{point.name}</span>
      </div>
    ))}
  </div>
  );
};

export default BCubic;

