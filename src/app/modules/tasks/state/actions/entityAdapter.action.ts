import { createEntityAdapter } from '@reduxjs/toolkit';
import { Task } from '../../shared/task.dto';

const adapter = createEntityAdapter<Task>({
  selectId: (task) => task.id,
  sortComparer: (x, y) => x.title.localeCompare(y.title),
});

export default adapter;
