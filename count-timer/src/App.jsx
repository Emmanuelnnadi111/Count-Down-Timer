import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeInput, setTimeInput] = useState('');
  const [countdownTime, setCountdownTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  useEffect(() => {
    if (timerRunning && !timerPaused) {
      const intervalId = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timerRunning, timerPaused]);

  const handleStart = () => {
    if (!timerRunning) {
      setCountdownTime(parseInt(timeInput));
      setRemainingTime(parseInt(timeInput));
      setTimerRunning(true);
      setTimerPaused(false);
    }
  };

  const handlePause = () => {
    setTimerPaused(!timerPaused);
  };

  const handleReset = () => {
    setTimerRunning(false);
    setTimerPaused(false);
    setRemainingTime(0);
  };

  const handleChange = (e) => {
    setTimeInput(e.target.value);
  };

  return (
    <div className="count-timer">
      <div className="countdown">
        <h1 className='header'>Countdown Timer</h1>
        <TimerInput value={timeInput} onChange={handleChange} />
        <TimerDisplay remainingTime={remainingTime} />
        <TimerControls
          timerRunning={timerRunning}
          timerPaused={timerPaused}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

function TimerInput({ value, onChange }) {
  return (
    <div>
      <input type="number" value={value} onChange={onChange} placeholder="Enter seconds" />
    </div>
  );
}

function TimerDisplay({ remainingTime }) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  return (
    <div>
      <h2 className='second-header'>Remaining Time: {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</h2>
    </div>
  );
}

function TimerControls({ timerRunning, timerPaused, onStart, onPause, onReset }) {
  return (
    <div className='btn'>
      <button onClick={onStart} disabled={timerRunning}>Start</button>
      <button onClick={onPause} disabled={!timerRunning}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;


