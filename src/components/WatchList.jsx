import React from "react";
import { useSelector } from "react-redux";

const WatchList = () => {
  const watchlist = useSelector((store) => {
    store.weather;
  });
  return <div></div>;
};

export default WatchList;
