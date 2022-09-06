import React from 'react';

const WeatherInput = ({ handleChange, input }) => {
  return (
    <div className="tempInput">
      <input
        type="text"
        placeholder="Enter City Name"
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default WeatherInput;
