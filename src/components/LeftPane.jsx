import React, { useState, useEffect } from 'react';

const LeftPane = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="left-pane">
      <div className="time">{time.toLocaleTimeString()}</div>
      <div className="date">{time.toLocaleDateString('en-GB')}</div>
      <div className="day">{time.toLocaleDateString('en-US', { weekday: 'long' })}</div>
    </div>
  );
};

export default LeftPane;
