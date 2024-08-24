import React, { useState, useEffect } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(60); // Set initial countdown time in seconds

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <h2>{formatTime(seconds)}</h2>
      </div>
    </div>
  );
};

export default App;
