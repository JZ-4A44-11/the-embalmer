import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { TaskStructure } from '../shared/models';

const inputOneTask = createAction<PrepareAction<TaskStructure>>(
  'task/AddOne',
  function prepare(task: TaskStructure) {
    return { payload: task };
  }
);
export default inputOneTask;
