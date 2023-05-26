import { configureStore } from "@reduxjs/toolkit";
import { repositoriesSlice } from "./repositoriesSlice";

export const store = configureStore({
  reducer: {
    [repositoriesSlice.name]: repositoriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
