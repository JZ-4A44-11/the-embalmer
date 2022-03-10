import taskSlicer from './task.slice';
import inputUser from './actions/inputTask.action';
import createTask from './services/createTask.service';

export const taskActions = {
  addOne: inputUser,
};
export const taskService = {
  create: createTask,
};

export * from './shared/models';
export const taskReducer = taskSlicer.reducer;
