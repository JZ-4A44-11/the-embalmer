import taskSlicer from '@tasks/task.slice';

export * from './store';
export const task = { taskReducer: taskSlicer.reducer };
