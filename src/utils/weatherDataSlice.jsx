import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
  name: "weather",
  initialState: { watchlist: [] },
  reducers: {
    addWatchList: (state, action) => {
      state.watchlist.push(action.payload);
    },
  },
});

export const { addWatchList } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
