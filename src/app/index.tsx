import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '@src/store';
import { taskActions } from './modules/tasks';
import Router from './view/index.routes';

export default function App(): React.ReactElement {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  return (
    <section>
      <Router />
      <button
        type="button"
        onClick={() => {
          dispatch(
            taskActions.addOne({ id: nanoid(), title: 'mock', description: '' })
          );
        }}
      >
        push
      </button>
      <div>
        {tasks.ids.map((elm) => (
          <p key={elm}>title : {tasks.entities[elm.toString()].title}</p>
        ))}
      </div>
    </section>
  );
}
