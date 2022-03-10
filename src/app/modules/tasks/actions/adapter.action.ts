import { createEntityAdapter } from '@reduxjs/toolkit';
import { TaskStructure } from '../shared/models';

const taskAdapter = createEntityAdapter<TaskStructure>({
  selectId: (task) => task.id,
  sortComparer: (x, y) => x.deadline - y.deadline,
});
export default taskAdapter;
