
// import './App.css'
// import NavBar from './components/navBar'
// import Footer from './components/footer'
// import Body from './components/body'

// const { useState } = require("react");

// function App() {

//   return (
//    <div> 
//     <NavBar />
//     <Body />
//     <Footer />

//     </div>
    
    
//   )
// }

// export default App



// // Normal calculator

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [display, setDisplay] = useState("");
//   const [result, setResult] = useState("");

//   const handleClick = (value) => {
//     if (value === "=") {
//       try {
//         setResult(eval(display)); // Use a safe parser like math.js in production.
//       } catch {
//         setResult("Error");
//       }
//     } else if (value === "C") {
//       setDisplay("");
//       setResult("");
//     } else {
//       setDisplay(display + value);
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <div>{display || "0"}</div>
//         <div className="result">{result}</div>
//       </div>
//       <div className="keypad">
//         {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((key) => (
//           <button key={key} onClick={() => handleClick(key)}>
//             {key}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




// BMI calculator
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {

      const [feet, inches] = height.split(".").map(Number);

      
      if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0 || inches >= 12) {
        setMessage("Please enter a valid height (e.g., 5.5 for 5 feet 5 inches).");
        return;
      }

      const totalHeightInInches = feet * 12 + inches;
      const heightInMeters = totalHeightInInches * 2.54 / 100; // Convert inches to meters

      // Calculate BMI
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setMessage(getBMICategory(bmiValue));
    } else {
      setMessage("Please enter valid weight and height.");
    }
  };

  const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) return "You are underweight. Consider consulting a nutritionist for advice.";
    if (bmiValue >= 18.5 && bmiValue <= 24.9) return "You are at a normal weight. Great job! Maintain a healthy lifestyle.";
    if (bmiValue >= 25 && bmiValue <= 29.9) return "You are overweight. Consider a balanced diet and regular exercise.";
    return "You are obese. Please consult a healthcare professional for guidance.";
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="form-group">
        <label id="weight">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight in kilograms"
        />
      </div>
      <div className="form-group">
        <label id="height">Height (Feet.Inches):</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in feet and inches (e.g., 5.5)"
        />
      </div>
      <button onClick={calculateBMI} className="calculate-btn">
        Calculate BMI
      </button>
      <button onClick={resetFields} className="reset-btn">
        Reset
      </button>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default App;





// // Counter App

// import './App.css';

// import React, { useState } from "react"; 

// function App() {
//   const [count, setCount] = useState(0); 

//   return (
//     <div className="container my-5">
//       <div className="card text-center my-5">
//         <div className="card-body">
//           <h1>Counter App</h1>
//           <div className="my-5">
//             <h2 className="my-5">Count: {count}</h2>
//             <button
//               className="btn btn-success mx-3"
//               onClick={() => setCount(count + 1)}
//             >
//               Increment
//             </button>
//             <button
//               className="btn btn-success mx-3"
//               onClick={() => setCount(count - 1)}
//               disabled={count === 0}
//             >
//               Decrement
//             </button>
//             <button
//               className="btn btn-success mx-3"
//               onClick={() => setCount(0)}
//               disabled={count === 0}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
