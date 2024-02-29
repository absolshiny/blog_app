import React, { useState } from 'react';
import './styles/app.css';

function App() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className= "App">
    <div className="container">
      <h1 className="title">Space Blog</h1>  
      <button className="top-right-button" disabled={showText} onClick={toggleText}>
        Click Me
      </button>
    </div>
      {showText && (
        <div className="text-box">
          <p>Hello again!</p>
          <button className="close-button" onClick={toggleText}>X</button>
        </div>
      )}
    </div>
  );
}

export default App;