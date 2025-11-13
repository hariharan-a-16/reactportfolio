import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);        
  const [isRunning, setIsRunning] = useState(false); 
  const [isPaused, setIsPaused] = useState(false);  


  useEffect(() => {
    let timer;
    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isPaused]);

  
  const handleStart = () => {
    setTime(0);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };


  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
  };

 
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to right, #95cb00ff, #f2fdffff)",
    fontFamily: "Poppins, sans-serif",
  };

  const timeStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  };

  const startBtn = { ...buttonStyle, backgroundColor: "#4CAF50", color: "white" };
  const pauseBtn = { ...buttonStyle, backgroundColor: "#FF9800", color: "white" };
  const resumeBtn = { ...buttonStyle, backgroundColor: "#2196F3", color: "white" };
  const stopBtn = { ...buttonStyle, backgroundColor: "#F44336", color: "white" };

  return (
    <div style={containerStyle}>
      <h1 style={timeStyle}>{time} s</h1>
      <div>
        {!isRunning && (
          <button style={startBtn} onClick={handleStart}>
            Start
          </button>
        )}
        {isRunning && !isPaused && (
          <button style={pauseBtn} onClick={handlePause}>
            Pause
          </button>
        )}
        {isRunning && isPaused && (
          <button style={resumeBtn} onClick={handleResume}>
            Resume
          </button>
        )}
        {isRunning && (
          <button style={stopBtn} onClick={handleStop}>
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
