import React, { useEffect } from 'react';
import { getFetchTasks } from 'app/actions/actionsTasks';
import { useAppDispatch, useTypeSelector } from 'src/hooks/useTyped';

const ToDoTest: React.FC = () => {
  const { tasks, loading, error } = useTypeSelector((state) => state.task);
  const dispatch = useAppDispatch();
  console.log(tasks);

  useEffect(() => {
    dispatch(getFetchTasks());
  }, []);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error}</h4>;

  return (
    <div>
      1
      {tasks.map((task) => (
        <div key={task.id}>task.name</div>
      ))}
    </div>
  );
};

export default ToDoTest;
