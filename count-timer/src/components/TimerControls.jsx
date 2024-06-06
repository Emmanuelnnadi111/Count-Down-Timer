import React from 'react';

function TimerControls({timerRunning, timerPaused, onStart, onPause, onReset}) {
    return (
      <div>
        <button onClick={onStart} disabled={timerRunning}>Start</button>
        <button onClick={onPause} disabled={!timerRunning}>Pause</button>
        <button onClick={onReset}>Reset</button>
      </div>
    );
  }
  
  export default TimerControls();