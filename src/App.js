import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const ageDiff = today - birthDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    } else {
      alert('Please enter your date of birth');
    }
  };

  return (
    <div>
      <center>
        <h1>Age Calculator</h1>
        <h3>Enter your date of birth</h3>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <br />
        <button
          style={{ backgroundColor: 'blue', color: 'white' }}
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {age !== null && (
          <p>
            <strong>Your age is {age} years old.</strong>
          </p>
        )}
      </center>
    </div>
  );
}

export default App;