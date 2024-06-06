import React from 'react';

function TimerDisplay({ remainingTime }) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div>
        <h2>Remaining Time: {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</h2>
      </div>
    );
  }


  export default TimerDisplay();