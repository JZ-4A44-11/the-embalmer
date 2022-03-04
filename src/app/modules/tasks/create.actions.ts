import { validateOrReject } from 'class-validator';
import { Dispatch } from 'react';
import { addOne, CreateTaskDto, Task } from '.';

export async function createTask(
  props: CreateTaskDto,
  dispatch: Dispatch<any>
): Promise<void> {
  const task = new Task(props);
  console.log(task);

  try {
    await validateOrReject(task);
    dispatch(addOne({ ...task }));
  } catch (err) {}
}
