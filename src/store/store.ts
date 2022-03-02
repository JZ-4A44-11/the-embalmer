import { configureStore } from '@reduxjs/toolkit';
import { reducer as tasks } from '@tasks/index';

export const store = configureStore({
  reducer: {
    tasks,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
