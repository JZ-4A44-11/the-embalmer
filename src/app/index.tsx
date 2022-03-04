import React, { useEffect } from 'react';
import { RootState } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';
import { CreateTaskDto } from './modules/tasks';
import { createTask } from './modules/tasks/create.actions';
import Router from './view';

export default function App(): React.ReactElement {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    async function addOnTask(task: CreateTaskDto) {
      await createTask(task, dispatch);
    }

    addOnTask({
      name: 'mock',
      description: 'mock description',
      deadline: Date.now(),
      completeAt: Date.now().toString(),
    });
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <section>
      <div>{tasks.entities[0]?.name}</div>
      <Router />
    </section>
  );
}
