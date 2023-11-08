import { Route, Routes, Navigate } from 'react-router-dom';

import ToDoList from 'components/Pages/ToDoList/ToDoList';
import AddToDo from 'components/Pages/AddToDo/AddToDo';
import NotFound from 'components/Pages/NotFound/NotFound';
import ChangeToDo from 'components/Pages/ChangeToDo/ChangeToDo';

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/todos">
          <Route index element={<ToDoList />} />
          <Route path="add" element={<AddToDo />} />
          <Route path="change/:id" element={<ChangeToDo />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </main>
  );
}
