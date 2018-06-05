import React from 'react';
import './AsyncBoundary.css';

const AsyncBoundary = props => {
  return (
    <div className="Error">
      <h2>Not available at moment</h2>
      <p>
        The page you are looking for is not available at the moment. You either
        offline or external servers not responding.
      </p>
    </div>
  );
};

export default AsyncBoundary;
