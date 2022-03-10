import { PayloadAction, EntityState } from '@reduxjs/toolkit';
import { TaskStructure } from './shared/models';
import taskAdapter from './actions/adapter.action';

export default {
  received: (
    state: EntityState<TaskStructure>,
    action: PayloadAction<TaskStructure[]>
  ) => {
    taskAdapter.addMany(state, action.payload);
  },
};
