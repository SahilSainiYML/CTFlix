import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userSlice";
import nowPlayingReducer from "../Reducers/nowPlayingSlice";

const userStore = configureStore({
  reducer: {
    user: userReducer,
    nowPlaying: nowPlayingReducer,
  },
});

export default userStore;
