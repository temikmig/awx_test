import { configureStore } from "@reduxjs/toolkit";
import { exchangeApi } from "@/api/exchangeApi";

export const store = configureStore({
  reducer: {
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
