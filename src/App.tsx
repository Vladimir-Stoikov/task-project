import { Route, Routes, Navigate } from 'react-router-dom';
import ToDoList from 'app/ToDoList/ToDoList';
import AddToDo from 'app/AddToDo/AddToDo';
import NotFound from 'app/NotFound/NotFound';
import ChangeToDo from 'app/ChangeToDo/ChangeToDo';

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/tasks">
          <Route index element={<ToDoList />} />
          <Route path="add" element={<AddToDo />} />
          <Route path="change/:id" element={<ChangeToDo />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </main>
  );
}
