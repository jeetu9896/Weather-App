import React from 'react';

const WeatherInput = ({ handleChange }) => {
  return (
    <div className='tempInput'>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default WeatherInput;
