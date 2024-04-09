import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Error from "./components/Error";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [watchlist, setWatchList] = useState([]);
  const [error, setError] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5728a97e6b0c125f1e373022e3fb4433`;

  const searchLocation = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLocation("");
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const addToWatchlist = () => {
    setWatchList([...watchlist, data]);
  };

  return (
    <div>
      <div className="w-full h-full relative bg-gray-400 font-serif">
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
            onClick={addToWatchlist}
            className="p-3 m-3 bg-black text-white rounded-2xl">
            add to watchlist
          </button>
        </form>
        <div className="flex items-center justify-center">
          {error && <Error error={error} />}
        </div>

        <Weather weatherData={data} />
        {watchlist.map((data, index) => {
          return <Weather key={index} weatherData={data} />;
        })}
      </div>
    </div>
  );
};

export default App;
