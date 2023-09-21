import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
    const [date, time] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      time(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

  const currentTime = `${hours}:${minutes}:${seconds}`;
    
  return (
    <div className="clock">
        <span className="time">{currentTime}</span>
    </div>
  )
}

export default Clock;
