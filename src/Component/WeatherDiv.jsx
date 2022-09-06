import React, { useEffect, useState } from 'react';
import WeatherButton from './WeatherButton';
import WeatherInput from './WeatherInput';
import WeatherOutput from './WeatherOutput';

const WeatherDiv = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [fetchdata, setfetchdata] = useState(null);
  const [input, setInput] = useState('mumbai');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const [fetchextradata, setfetchextradata] = useState(null);
  const handleSubmit = async () => {
    try {
      setloading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b49200d690bb1cce0e2a4dd2e53cb743&units=metric`
      );
      const data = await res.json();
      setfetchextradata(data.weather[0]);
      // console.log(fetchextradata, 'chek');
      setfetchdata(data);
    } catch {
      seterr(true);
      console.log('err');
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const refreashpage = () => {
    window.location.reload(false);
  };
  console.log(fetchdata);
  return (
    <>
      {loading ? (
        <h1 className="message"> Loading..... </h1>
      ) : err ? (
        <div className="message">
          <h1>Error....</h1>
          <button onClick={refreashpage}>Click to Reload the Page</button>
        </div>
      ) : (
        <div className="main-container">
          <h1>Weather App</h1>
          <WeatherInput handleChange={handleChange} input={input} />
          <WeatherButton handleSubmit={handleSubmit} />
          <WeatherOutput
            fetchdata={fetchdata}
            fetchextradata={fetchextradata}
          />
        </div>
      )}
    </>
  );
};

export default WeatherDiv;
