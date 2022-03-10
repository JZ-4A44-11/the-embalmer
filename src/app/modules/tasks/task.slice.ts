import { createSlice } from '@reduxjs/toolkit';
import { TaskStructure } from './shared/models';
import taskAdapter from './actions/adapter.action';
import reducer from './reducer';

export type TaskState = TaskStructure;

const taskSlicer = createSlice({
  name: 'tasks',
  initialState: taskAdapter.getInitialState(),
  reducers: reducer,
});

export default taskSlicer;
