import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../shared/task.dto';
import adapter from './actions/entityAdapter.action';

export default createSlice({
  name: 'tasks',
  initialState: adapter.getInitialState,
  reducers: {
    setAll(state, action: PayloadAction<Task[]>) {
      adapter.setAll(state, action.payload);
    },
    addOne: adapter.addOne,
  },
});
