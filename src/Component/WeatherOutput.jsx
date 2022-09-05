import React from 'react';

const WeatherOutput = ({ fetchdata }) => {
  // console.log(fetchdata.weather[0].main);
  return (
    <>
      {!fetchdata ? (
        <h1>Enter City Name</h1>
      ) : (
        <div className='tempcard'>
          <h1>City : {fetchdata.name}</h1>

          <h2>Temprature : {fetchdata.main?.temp}</h2>
        </div>
      )}
    </>
  );
};

export default WeatherOutput;
