import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Error from "./components/Error";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList, removeFromWatchlist } from "./utils/weatherDataSlice";

const App = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.weather.watchlist);
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5728a97e6b0c125f1e373022e3fb4433`;

  const searchLocation = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
      setLocation("");

      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const handleWeatherData = () => {
    if (data) {
      dispatch(addWatchList(data));
      // setData(null);
    }
  };

  return (
    <div className="w-full min-h-screen  bg-gray-400 font-roboto">
      <h1 className="text-4xl text-center font-bold py-4">WEATHER APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-center p-4">
        <input
          type="text"
          className="px-6 py-3 w-[700px] border border-gray-200  rounded-2xl placeholder:text-gray-400"
          placeholder="enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={searchLocation}
          className="p-3 m-3 bg-black text-white rounded-2xl">
          click
        </button>
        <button
          onClick={handleWeatherData}
          className="p-3 m-3 bg-black text-white rounded-2xl">
          add to watchlist
        </button>
      </form>
      <div className="flex items-center justify-center">
        {error && <Error error={error} />}
      </div>
      {data && <Weather weatherData={data} />}
      <div className="flex flex-row flex-wrap  m-4  ">
        {watchlist.map((item) => (
          <div key={item.id} className=" p-5 ">
            <Weather
              weatherData={item}
              removeFromWatchlist={(item) =>
                dispatch(removeFromWatchlist(item))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
