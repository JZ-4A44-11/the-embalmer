import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { TaskStructure } from './task.dto';

export type TaskState = TaskStructure;

const taskAdapter = createEntityAdapter<TaskStructure>({
  selectId: (task) => task.id,
  sortComparer: (x, y) => x.deadline - y.deadline,
});

const taskSlicer = createSlice({
  name: 'tasks',
  initialState: taskAdapter.getInitialState(),
  reducers: {
    tasksReceived: (state, action: PayloadAction<TaskStructure[]>) => {
      taskAdapter.setAll(state, action.payload);
    },
    addOne: taskAdapter.addOne,
  },
});

export const { addOne, tasksReceived } = taskSlicer.actions;
export default taskSlicer.reducer;
