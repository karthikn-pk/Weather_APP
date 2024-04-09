import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
  name: "weather",
  initialState: { watchlist: [] },
  reducers: {
    addWatchList: (state, action) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addWatchList, removeFromWatchlist } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
