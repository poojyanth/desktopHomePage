import React from 'react';

const StaticInfo = () => {
  const quotes = ['Stay positive!', 'Keep learning.', 'You can do it!'];

  return (
    <div className="static-info">
      <h3>Motivational Quotes</h3>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index} className="quote-item">
            {quote}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticInfo;
