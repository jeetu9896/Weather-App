import React, { useEffect, useState } from 'react';
import WeatherButton from './WeatherButton';
import WeatherInput from './WeatherInput';
import WeatherOutput from './WeatherOutput';

const WeatherDiv = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [fetchdata, setfetchdata] = useState(null);
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      setloading(true);
      const res = await fetch(
        `https://api.openweathermap.org/dataa/2.5/weather?q=${input}&appid=b49200d690bb1cce0e2a4dd2e53cb743`
      );
      const data = await res.json();
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
  console.log(fetchdata);
  return (
    <>
      {loading ? (
        <h1> Loading..... </h1>
      ) : err ? (
        <h1>Error....</h1>
      ) : (
        <div>
          <WeatherInput handleChange={handleChange} />
          <WeatherButton handleSubmit={handleSubmit} />
          {fetchdata ? <WeatherOutput fetchdata={fetchdata} /> : <> hello</>}
        </div>
      )}
    </>
  );
};

export default WeatherDiv;
