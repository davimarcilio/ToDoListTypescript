import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
