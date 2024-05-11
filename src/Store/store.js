import { configureStore } from "@reduxjs/toolkit";
import reducers from "../Reducers/reducers";

const userStore = configureStore({
  reducer: {
    user: reducers,
  },
});

export default userStore;
