// import React, { useEffect, useState } from 'react';
// import { getFetchTasks } from 'app/actions/actionsTasks';
// import { useAppDispatch, useTypeSelector } from 'src/hooks/useTyped';
// import type {} from 'redux-thunk/extend-redux';

// const ToDoTest: React.FC = () => {
//   const [tasksList, setTasksList] = useState([]);
//   const { tasks, loading, error } = useTypeSelector((state) => state.task);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(getFetchTasks());
//     console.log('Пришло в компонент', tasks, loading, error);
//   }, []);

//   if (loading) return <h4>Loading...</h4>;
//   if (error) return <h4>{error}</h4>;

//   return (
//     <div>
//       1
//       {tasks.map((task) => (
//         <div key={task.id}>{task.name}</div>
//       ))}
//     </div>
//   );
// };

// export default ToDoTest;

import React from 'react';

export default function ToDoTest() {
  return <div>ToDoTest</div>;
}
