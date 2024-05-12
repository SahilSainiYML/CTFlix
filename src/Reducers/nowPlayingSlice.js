import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: {
    nowPlaying: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { addNowPlaying } = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;
