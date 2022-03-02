import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import ITask from './interface';

export type TaskState = ITask;

const taskAdapter = createEntityAdapter<TaskState>({
  selectId: (task) => task.id,
  sortComparer: (x, y) => x.deadline.getTime() - y.deadline.getTime(),
});

const taskSlicer = createSlice({
  name: 'tasks',
  initialState: taskAdapter.getInitialState(),
  reducers: {
    tasksReceived: (state, action: PayloadAction<ITask[]>) => {
      taskAdapter.setAll(state, action.payload);
    },
    addOn: taskAdapter.addOne,
  },
});

export const { addOn, tasksReceived } = taskSlicer.actions;
export default taskSlicer.reducer;
