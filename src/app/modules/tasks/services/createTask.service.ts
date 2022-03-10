import { validateOrReject } from 'class-validator';
import { CreateTaskDto, Task, TaskStructure } from '../shared/models';

async function createTask(command: CreateTaskDto): Promise<TaskStructure> {
  const task = new Task(command);

  try {
    await validateOrReject(task);
  } catch (err) {
    return null;
  }

  return { ...task };
}
export default createTask;
