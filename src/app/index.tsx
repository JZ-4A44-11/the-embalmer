import * as React from 'react';
import { useEffect } from 'react';
import { RootState } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';
import { taskService, taskActions } from './modules/tasks';
import Router from './view';

export default function App(): React.ReactElement {
  const taskState = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const task = React.useMemo(
    () =>
      taskService.create({
        name: 'mock',
        description: '_',
        deadline: Date.now(),
      }),
    []
  );

  useEffect(() => {
    task.then((res) => dispatch(taskActions.addOne(res)));
  }, [taskState]);

  return (
    <section>
      <Router />
    </section>
  );
}
