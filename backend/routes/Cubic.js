// Import required modules
const express = require('express');
const cors = require('cors'); // Optional: to handle cross-origin requests

// Create a new router instance
const router = express.Router();

// Middleware to parse JSON data (apply this in the main `app.js` if using a separate router)
router.use(cors());
router.use(express.json());
const parseFraction = (value) => {
  if (value.includes('/')) {
    const [numerator, denominator] = value.split('/').map(Number);
    return numerator / denominator;
  }
  return parseFloat(value); // For handling decimal and integer values
};

// Function to parse input string with fractions and decimals
const parseTuples = (input) => {
  // Match tuples like (1/2,1/2,1/2), (0.5,0.5,0.5) or (1,1,1)
  const regex = /\((\d+\/\d+|\d+\.\d+|\d+),(\d+\/\d+|\d+\.\d+|\d+),(\d+\/\d+|\d+\.\d+|\d+)\)/g;
  const matches = [];
  let match;

  // Loop through all regex matches in the input string
  while ((match = regex.exec(input)) !== null) {
    // Convert matched values into numbers using parseFraction
    const [x, y, z] = [match[1], match[2], match[3]].map(parseFraction);
    matches.push([x, y, z]); // Store as an array of numbers [x, y, z]
  }

  return matches; // Returns an array of arrays (e.g., [[0.5, 0.5, 0.5], [0, 0.5, 0], ...])
};

// POST route to handle data from the frontend
router.post('/cubic-data', (req, res) => {
  // Access data sent from the frontend
  const { firstElementValue, secondElementValue, thirdElementValue, fourthElementValue } = req.body;
  const fp = parseTuples(firstElementValue);
  const sp = parseTuples(secondElementValue);
  const tp = parseTuples(thirdElementValue);
  const z = parseTuples(fourthElementValue);
  // console.log('Parsed Data:', parsedData);
  // console.log('Parsed Data:', sparsedData);
  // console.log('Parsed Data:', tparsedData);
  // console.log('Parsed Data:', z);
  if (z.length === 0) {
    // If no tuples were parsed, send an error response
    return res.status(400).json({ error: 'Failed to parse input data. Ensure the input format is correct.' });
  }

  const x = [];
  const fx=[];

  // Three nested loops ranging from -5 to 4 (inclusive)
  for (let h = -4; h < 5; h++) {
    for (let k = -4; k < 5; k++) {
      for (let l = -4; l < 5; l++) {
        // Calculate the value of `a` based on h, k, l, u, v, w
        const a = h *z[0][0]  + k * z[0][1] + l * z[0][2];
  
        // If a is zero, add [h, k, l] to the array `x`
        if (a === 0) {
          x.push([h, k, l]);
        }
      }
    }
  }
  let m = x.length;
  let n=fp.length;

  let cs=0;
  let sn=0;
if(n!=0){
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Calculate ky as the dot product of x[i] and fp[j]
      let ky = x[i][0] * fp[j][0] + x[i][1] * fp[j][1] + x[i][2] * fp[j][2];
      ky = 2 * ky; // Multiply ky by 2
  
      // Get the integer part and fractional part of ky
      let ip = Math.trunc(ky); // Integer part
      let frp = ky - ip; // Fractional part
  
      // Check if ky is even or odd using modulus 2 and handle the fractional part
      if (ky % 2 === 0) {
        cs += 1; // Even ky, increase cs
      } else if (ky % 2 === 1||ky%2===-1) {
        cs -= 1; // Odd ky, decrease cs
      } else if (Math.abs(frp - 0.5) < 0.00001 && ip % 2 === 0) {
        // Check if frp is approximately 0.5 and ip is even
        sn += 1;
      } else if (Math.abs(frp - 0.5) < 0.00001 && (ip % 2 === 1||ip%2 === -1)) {
        // Check if frp is approximately 0.5 and ip is odd
        sn -= 1;
      } else {
        // General case for cosine and sine calculations
        cs += Math.cos(Math.PI * ky); // Use Math.PI for π
        sn += Math.sin(Math.PI * ky);
      }
      // console.log(ky,' ',cs,' ',sn,' ',ip%2);
    }
      
    // If cs or sn are non-zero, add the current x[i] to fx array
    if (cs !== 0 || sn !== 0) {
      fx.push([x[i][0], x[i][1], x[i][2]]);
     
    }
    cs=0;sn=0;
  }
}
  n=sp.length;
  if(n!=0){
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Calculate ky as the dot product of x[i] and fp[j]
      let ky = x[i][0] * sp[j][0] + x[i][1] * sp[j][1] + x[i][2] * sp[j][2];
      ky = 2 * ky; // Multiply ky by 2
  
      // Get the integer part and fractional part of ky
      let ip = Math.trunc(ky); // Integer part
      let frp = ky - ip; // Fractional part
  
      // Check if ky is even or odd using modulus 2 and handle the fractional part
      if (ky % 2 === 0) {
        cs += 1; // Even ky, increase cs
      } else if (ky % 2 === 1||ky%2===-1) {
        cs -= 1; // Odd ky, decrease cs
      } else if (Math.abs(frp - 0.5) < 0.00001 && ip % 2 === 0) {
        // Check if frp is approximately 0.5 and ip is even
        sn += 1;
      } else if (Math.abs(frp - 0.5) < 0.00001 && (ip % 2 === 1||ip%2 === -1)) {
        // Check if frp is approximately 0.5 and ip is odd
        sn -= 1;
      } else {
        // General case for cosine and sine calculations
        cs += Math.cos(Math.PI * ky); // Use Math.PI for π
        sn += Math.sin(Math.PI * ky);
      }
      // console.log(ky,' ',cs,' ',sn,' ',ip%2);
    }
      
    // If cs or sn are non-zero, add the current x[i] to fx array
    if (cs !== 0 || sn !== 0) {
      fx.push([x[i][0], x[i][1], x[i][2]]);
     
    }
    cs=0;sn=0;
  }}
  n=tp.length;
  if(n!=0){
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Calculate ky as the dot product of x[i] and fp[j]
      let ky = x[i][0] * tp[j][0] + x[i][1] * tp[j][1] + x[i][2] * tp[j][2];
      ky = 2 * ky; // Multiply ky by 2
  
      // Get the integer part and fractional part of ky
      let ip = Math.trunc(ky); // Integer part
      let frp = ky - ip; // Fractional part
  
      // Check if ky is even or odd using modulus 2 and handle the fractional part
      if (ky % 2 === 0) {
        cs += 1; // Even ky, increase cs
      } else if (ky % 2 === 1||ky%2===-1) {
        cs -= 1; // Odd ky, decrease cs
      } else if (Math.abs(frp - 0.5) < 0.00001 && ip % 2 === 0) {
        // Check if frp is approximately 0.5 and ip is even
        sn += 1;
      } else if (Math.abs(frp - 0.5) < 0.00001 && (ip % 2 === 1||ip%2 === -1)) {
        // Check if frp is approximately 0.5 and ip is odd
        sn -= 1;
      } else {
        // General case for cosine and sine calculations
        cs += Math.cos(Math.PI * ky); // Use Math.PI for π
        sn += Math.sin(Math.PI * ky);
      }

    }
      
    // If cs or sn are non-zero, add the current x[i] to fx array
    if (cs !== 0 || sn !== 0) {
      fx.push([x[i][0], x[i][1], x[i][2]]);
     
    }
    cs=0;sn=0;
  }}
x.length=0;
let mi = fx.length;
// Initialize yi, yj, yk for rotation calculations
let yi, yj, yk; // for rotation around y-axis
yi = (z[0][1] * fx[mi - 1][2] - z[0][2] * fx[mi - 1][1]);
yj = (z[0][2] * fx[mi - 1][0] - z[0][0] * fx[mi - 1][2]);
yk = (z[0][0] * fx[mi - 1][1] - z[0][1] * fx[mi - 1][0]);

// Calculate magnitude of the y-rotation vector and x-rotation vector
let vy = Math.sqrt(yi * yi + yj * yj + yk * yk); // Magnitude of y-rotation vector
let vx = Math.sqrt(
  fx[mi - 1][0] * fx[mi - 1][0] +
  fx[mi - 1][1] * fx[mi - 1][1] +
  fx[mi - 1][2] * fx[mi - 1][2]
); // Magnitude of x-rotation vector

const points = [];

// Define `f` correctly before use (e.g., `f = mi` or some other value)
 // Assuming `f` should be `mi`

for (let i = 0; i < fx.length; i++) {
  // Calculate the projection of points onto the rotated x and y axes
  let f = (fx[i][0] * fx[mi - 1][0] + fx[i][1] * fx[mi - 1][1] + fx[i][2] * fx[mi - 1][2]) / vx; // Value on rotated x-axis
  let fy = (yi * fx[i][0] + yj * fx[i][1] + yk * fx[i][2]) / vy; // Value on rotated y-axis
  points.push([f, fy]);
}
if(points.length!=0){
  router.get('/BCubic', (req, res) => {
    // Example points data - you can replace this with your dynamic data
  res.json(points);
  });
  router.get('/final', (req, res) => {
    // Example points data - you can replace this with your dynamic data
  res.json(fx);
  });
}
  // Perform operations with the received data (e.g., save to a database or process it)

  // Send a response back to the frontend
  res.status(200).json({ message: 'Data received successfully', receivedData: req.body });
});

// Export the router to be used in `app.js`
module.exports = router;

