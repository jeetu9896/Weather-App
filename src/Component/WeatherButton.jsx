import React from 'react';

const WeatherButton = ({ handleSubmit }) => {
 
  // console.log(handleSubmit);
  return (
    <div className='tempButton'>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default WeatherButton;
