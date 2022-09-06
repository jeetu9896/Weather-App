import React from 'react';

const WeatherOutput = ({ fetchdata, fetchextradata }) => {
  console.log(fetchextradata);
  const d = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <>
      {!fetchdata ? (
        <h1>Enter City Name</h1>
      ) : (
        <div className="tempcard">
          <h1>City : {fetchdata.name}</h1>
          <h3>
            {d.getDate()}/{months[d.getMonth()]}
            {d.getFullYear()} , {days[d.getDay()]}
          </h3>
          <h2>Temprature : {fetchdata.main?.temp}°C</h2>
          <h3>Weather : {fetchextradata?.main}</h3>
        </div>
      )}
    </>
  );
};

export default WeatherOutput;
