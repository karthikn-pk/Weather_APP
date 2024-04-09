import React from "react";

const Weather = ({ weatherData, removeFromWatchlist }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className="flex w-[550px] h-[350px] bg-gray-300 mx-auto rounded-lg shadow-lg">
          <div className="first flex flex-col w-1/2 ">
            <h1 className="m-4">
              {weatherData.name} {weatherData.sys.country}
            </h1>
            <h1 className="m-4 text-5xl">{weatherData.main.temp} °C</h1>
            <p className="m-4">Feels Like: {weatherData.main.feels_like}°C</p>
            <p className="m-4">
              Minimum Temperature: {weatherData.main.temp_min}°C
            </p>
            <p className="m-4">
              Maximum Temperature: {weatherData.main.temp_max}°C
            </p>
          </div>
          <div className="second flex flex-col w-1/2">
            <p className="m-4">Pressure: {weatherData.main.pressure} hPa</p>
            <p className="m-4">Humidity: {weatherData.main.humidity}%</p>
            <p className="m-4">
              Weather Conditions: {weatherData.weather[0].description}
            </p>
            <p className="m-4">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      ) : null}
      <div className="relative top-0 right-0">
        <button
          className=" p-3 m-3 bg-black text-white rounded-2xl absolute bottom-0 right-0"
          onClick={() => removeFromWatchlist(weatherData)}>
          remove
        </button>
      </div>
    </div>
  );
};

export default Weather;
