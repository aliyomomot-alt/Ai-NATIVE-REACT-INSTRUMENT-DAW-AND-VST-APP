import { configureStore } from '@reduxjs/toolkit';
import dawReducer from './dawSlice';
import instrumentReducer from './instrumentSlice';
import mixerReducer from './mixerSlice';

export const store = configureStore({
  reducer: {
    daw: dawReducer,
    instrument: instrumentReducer,
    mixer: mixerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // For audio nodes
    }),
});
